<template>
  <div
    class="card-wrap"
    :style="cardWrapStyle"
    @mousedown="scrollContent"
    @mouseup="scrollContent"
    @mousemove="scrollContent"
    @mouseleave="scrollContent"
  >
    <div
      ref="cardWrapScrollBox"
      class="card-wrap-scroll-box"
      :style="cardWrapScrollBoxStyle"
    >
      <card
        v-for="(item, index) in portfolio"
        :key="index"
        :item="item"
        :card-style="cardStyle(index)"
      />
    </div>
  </div>
  <!--  <div class="articles">-->
  <!--    <div class="articles-wrap">-->
  <!--      <scroll-items :items="portfolio" type="portfolio" />-->
  <!--      <span class="side-text-1"-->
  <!--        >PORTFOLIO<span class="side-text-line"></span-->
  <!--      ></span>-->
  <!--    </div>-->
  <!--    <div class="articles-wrap">-->
  <!--      <scroll-items :items="note" type="note" />-->
  <!--      <span class="side-text-2">NOTE<span class="side-text-line"></span></span>-->
  <!--    </div>-->
  <!--  </div>-->
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Debounce } from 'vue-debounce-decorator'
import ScrollItems from '~/components/ScrollItems.vue'
import Card from '~/components/Card.vue'

@Component({
  layout: 'top',
  components: { Card, ScrollItems },
  async asyncData({ $content, params }) {
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
    // console.log(this.$content('note').fetch())
  }

  mounted() {
    this.cardWrapStyle = {
      width: document.body.offsetWidth + 'px',
      height: document.body.offsetHeight + 'px',
    }

    // requestAnimationFrame(this.loop)
  }

  scrollContent(e: MouseEvent) {
    if (e.type === 'mousedown') {
      this.isDrag = true
      this.startX = e.clientX
      this.startY = e.clientY
    } else if (e.type === 'mouseup' || e.type === 'mouseleave') {
      this.isDrag = false
      this.startX = e.clientX
      this.startY = e.clientY
    } else if (e.type === 'mousemove' && this.isDrag) {
      this.move(e)
    }
  }

  @Debounce(10)
  move(e) {
    const transformValue = this.$refs.cardWrapScrollBox.style.transform.split(
      /[(),]/
    )
    const xValue = Number(transformValue[1].replace('px', ''))
    const yValue = Number(transformValue[2].replace('px', ''))
    this.$gsap.to(this.$refs.cardWrapScrollBox, {
      x: xValue + e.clientX - this.startX,
      y: yValue + e.clientY - this.startY,
      duration: 1.5,
    })
  }

  loop() {
    if (document.body.offsetWidth - 100 < this.cursorX) {
      this.translateX -= (300 + this.translateX) / 30
    } else if (this.cursorX < 100) {
      this.translateX += (300 - this.translateX) / 30
    }

    if (document.body.offsetHeight - 100 < this.cursorY) {
      this.translateY -= (100 + this.translateY) / 30
    } else if (this.cursorY < 100) {
      this.translateY += (100 - this.translateY) / 30
    }

    requestAnimationFrame(this.loop)
  }

  get cardWrapScrollBoxStyle() {
    return {
      transform: `translate3D(${this.translateX}px,${this.translateY}px,0)`,
      height: (Math.floor(this.portfolio.length / 4) + 1) * 400 * 1.5 + 'px',
      width: ((this.portfolio.length % 4) + 1) * 400 * 1.5 + 'px',
      // pointerEvents: this.isDrag ? 'none' : 'auto'
    }
  }

  get cardStyle() {
    return (i: number) => {
      return {
        top: 400 * Math.floor(i / 4) + 'px',
        left: 400 * (i % 4) + 'px',
      }
    }
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
    background-image: url('~@/assets/images/bg.png');
  }
}
</style>
