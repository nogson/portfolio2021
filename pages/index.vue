<template>
  <div class="card-wrap" :style="cardWrapStyle">
    <div
      ref="cardWrapScrollBox"
      class="card-wrap-scroll-box"
      :style="cardWrapScrollBoxStyle"
      :class="{ drag: isDrag }"
      @mousedown="scrollContent"
      @mouseup="scrollContent"
      @mousemove="scrollContent"
      @mouseleave="scrollContent"
    >
      <card
        v-for="(item, index) in note"
        :key="item.slug"
        :ref="item.slug"
        :item="item"
        :is-drag="isDrag"
        :translate-x="translateX"
        :translate-y="translateY"
        :is-show="isNote"
        :card-style="cardStyle(index)"
      />

      <card
        v-for="(item, index) in portfolio"
        :key="item.slug"
        :ref="item.slug"
        :item="item"
        :is-drag="isDrag"
        :translate-x="translateX"
        :translate-y="translateY"
        :is-show="!isNote"
        :card-style="cardStyle(index)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { gsap } from 'gsap'
import ScrollItems from '~/components/ScrollItems.vue'
import Card from '~/components/Card.vue'
import DynamicImage from '~/components/DynamicImage.vue'
import TopParts from '~/components/TopParts.vue'

const rowLength = 4

@Component({
  layout: 'top',
  components: { TopParts, DynamicImage, Card, ScrollItems },
  async asyncData({ $content }) {
    return {
      note: await $content('note').sortBy('create_at', 'desc').fetch(),
      portfolio: await $content('portfolio').sortBy('order', 'desc').fetch(),
    }
  },
})
export default class Index extends Vue {
  portfolio!: any[]
  note!: any[]
  cardWrapStyle: any = null
  cursorX!: number
  cursorY!: number
  startX!: number
  startY!: number
  translateX: number = 0
  translateY: number = 0
  isDrag: boolean = false

  head() {
    return {
      bodyAttrs: {
        class: 'top',
      },
    }
  }

  created() {
    this.$nuxt.$emit('updateContent', this.note)
    this.$nuxt.$on('changeType', (type: string) => this.changeType(type))
  }

  mounted() {
    this.cardWrapStyle = {
      width: document.body.offsetWidth + 'px',
      height: document.body.offsetHeight + 'px',
    }
    const x = (document.body.offsetWidth - this.cardWrapScrollBoxWidth) / 2
    const y = (document.body.offsetHeight - this.cardWrapScrollBoxHeight) / 2

    if (this.$route.query.translateX) {
      this.$nextTick(() => {
        gsap.to(this.$refs.cardWrapScrollBox, {
          x: Number(this.$route.query.translateX),
          y: Number(this.$route.query.translateY),
          opacity: 1,
          duration: 0,
        })
      })
    } else {
      gsap.fromTo(
        this.$refs.cardWrapScrollBox,
        {
          x,
          y,
          scale: 0.5,
          opacity: 0,
        },
        {
          x,
          y,
          scale: 1,
          duration: 1.5,
          delay: 1,
          opacity: 1,
        }
      )
    }

    // requestAnimationFrame(this.loop)
  }

  changeType(type: string) {
    this.$router.push({ path: '/', query: { type } })
  }

  scrollContent(e: MouseEvent) {
    if (!(e.target instanceof HTMLElement)) {
      return
    }

    if (e.type === 'mousedown') {
      if (e.target.className === 'card-wrap-scroll-box') {
        this.isDrag = true
        this.startX = e.offsetX
        this.startY = e.offsetY
      }
    } else if (e.type === 'mouseup' || e.type === 'mouseleave') {
      this.isDrag = false
      this.startX = e.offsetX
      this.startY = e.offsetY
    } else if (e.type === 'mousemove' && this.isDrag) {
      this.move(e)
    }
  }

  // @Debounce(33)
  move(e: MouseEvent) {
    const cardWrapScrollBox = this.$refs.cardWrapScrollBox as HTMLCanvasElement
    const transformValue = cardWrapScrollBox.style.transform.split(/[(),]/)
    let xValue = Number(transformValue[1].replace('px', ''))
    let yValue = Number(transformValue[2].replace('px', ''))
    xValue += e.offsetX - this.startX
    yValue += e.offsetY - this.startY

    if (xValue >= 0) {
      xValue = 0
    } else if (
      xValue <=
      document.body.offsetWidth - this.cardWrapScrollBoxWidth
    ) {
      xValue = document.body.offsetWidth - this.cardWrapScrollBoxWidth
    }

    if (yValue >= 0) {
      yValue = 0
    } else if (
      yValue <=
      document.body.offsetHeight - this.cardWrapScrollBoxHeight
    ) {
      yValue = document.body.offsetHeight - this.cardWrapScrollBoxHeight
    }

    this.translateX = xValue
    this.translateY = yValue
    gsap.to(this.$refs.cardWrapScrollBox, {
      x: xValue,
      y: yValue,
      duration: 0.75,
      ease: 'Power1.easeOut',
    })
  }

  get cardWrapScrollBoxHeight() {
    const itemLength = this.isNote ? this.note.length : this.portfolio.length
    return (Math.floor(itemLength / rowLength) + 1) * 400 * 1.5
  }

  get cardWrapScrollBoxWidth() {
    return rowLength * 400 * 1.5
  }

  get cardWrapScrollBoxStyle() {
    return {
      transform: `translate3D(0px,0px,0)`,
      height: this.cardWrapScrollBoxHeight + 'px',
      width: this.cardWrapScrollBoxWidth + 'px',
    }
  }

  get cardStyle() {
    return (index: number) => {
      return {
        top: Math.floor(index / rowLength) * 400 + 200 + 'px',
        left: (index % rowLength) * 400 + 400 + 'px',
      }
    }
  }

  get isNote() {
    return this.$route.query.type === 'note'
  }
}
</script>

<style scoped lang="scss">
.card-wrap {
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;

  .card-wrap-scroll-box {
    position: relative;
    background-image: url('~@/assets/images/bg.png');
    display: flex;
    flex-wrap: wrap;
    padding: 25%;
    cursor: grab;
    opacity: 0;
    &.drag {
      cursor: grabbing;
    }
  }
}
</style>
