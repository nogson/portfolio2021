<template>
  <div class="card-wrap" :style="cardWrapStyle" @mousemove="mouseenter">
    <div class="card-wrap-scroll-box" :style="cardWrapScrollBoxStyle">
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
  translateX: number = 0
  translateY: number = 0

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

    requestAnimationFrame(this.loop)
  }

  mouseenter(e: any) {
    this.cursorX = e.clientX
    this.cursorY = e.clientY
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
      transform: `translate(${this.translateX}px,${this.translateY}px)`,
    }
  }

  get cardStyle() {
    return (i: number) => {
      return {
        top: 300 * Math.floor(i / 5) + 'px',
        left: 300 * (i % 5) + 'px',
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
  }
}
</style>
