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
      :class="{drag:isDrag}"
    >
      <card
        v-for="(item, index) in portfolio"
        :key="index"
        :item="item"
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
import {Component, Vue} from 'nuxt-property-decorator'
// import {Debounce} from 'vue-debounce-decorator'
import ScrollItems from '~/components/ScrollItems.vue'
import Card from '~/components/Card.vue'

@Component({
  layout: 'top',
  components: {Card, ScrollItems},
  async asyncData({$content, params}) {
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
    this.$gsap
      .fromTo(this.$refs.cardWrapScrollBox,{
        x: this.cardWrapScrollBoxWidth * -0.25,
        y: this.cardWrapScrollBoxHeight * -0.25,
        scale:0.4,
        delay:2
      }, {
        x: this.cardWrapScrollBoxWidth * -0.25,
        y: this.cardWrapScrollBoxHeight * -0.25,
        scale:1,
        duration: 1.5,
      })

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

  //@Debounce(10)
  move(e) {
    const transformValue = this.$refs.cardWrapScrollBox.style.transform.split(
      /[(),]/
    )
    let xValue = Number(transformValue[1].replace('px', ''))
    let yValue = Number(transformValue[2].replace('px', ''))

    if(xValue > 0) {
      xValue = 0
    }else if(xValue < document.body.offsetWidth - this.cardWrapScrollBoxWidth){
      xValue = document.body.offsetWidth - this.cardWrapScrollBoxWidth
    }
    else {
      xValue += (e.clientX - this.startX) / 2
    }

    if(yValue > 0) {
      yValue = 0
    }else if(yValue < document.body.offsetHeight - this.cardWrapScrollBoxHeight){
      yValue = document.body.offsetHeight - this.cardWrapScrollBoxHeight
    }
    else {
      yValue += (e.clientY - this.startY) / 2
    }

    this.$gsap.to(this.$refs.cardWrapScrollBox, {
      x: xValue,
      y: yValue,
      duration: 1.5,
    })
  }

  get cardWrapScrollBoxHeight() {
    return (Math.floor(this.portfolio.length / 4) + 1) * 400 * 1.5
  }

  get cardWrapScrollBoxWidth() {
    return ((this.portfolio.length % 4) + 1) * 400 * 1.5
  }

  get cardWrapScrollBoxStyle() {
    return {
      transform: `translate3D(0px,0px,0)`,
      height: this.cardWrapScrollBoxHeight + 'px',
      width: this.cardWrapScrollBoxWidth + 'px',
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
    position: relative;
    background-image: url('~@/assets/images/bg.png');
    display: flex;
    flex-wrap: wrap;
    padding: 25%;
    cursor: grab;
    &.drag{
      cursor:grabbing;
    }
  }
}
</style>
