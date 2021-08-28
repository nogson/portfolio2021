<template>
  <section class="wrapper">
    <div
      v-masonry
      class="container"
      transition-duration="0.3s"
      item-selector=".card"
    >
      <div v-for="item in items" :key="item.slug" v-masonry-tile class="card">
        <p class="created-at">{{ item.created_at }}</p>
        <p class="title">{{ item.title }}</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { gsap } from 'gsap'
import ScrollItems from '~/components/ScrollItems.vue'
import Card from '~/components/Card.vue'
import DynamicImage from '~/components/DynamicImage.vue'
import TopParts from '~/components/TopParts.vue'
import ContentListMenu from '~/components/ContentListMenu.vue'

@Component({
  layout: 'top',
  components: { ContentListMenu, TopParts, DynamicImage, Card, ScrollItems },
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
    this.$nuxt.$emit('updateContent', {
      portfolio: this.portfolio,
      note: this.note,
    })
    this.$nuxt.$on('changeType', (type: string) => this.changeType(type))

    setInterval(() => {})
  }

  get items() {
    return [this.note, this.portfolio].flat()
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  background: $color-black;
  padding: 80px 0 24px;
}
.card {
  font-weight: bold;

  margin: 0.75em;
  padding: 0.5em 0;
  box-sizing: border-box;
  writing-mode: vertical-rl;
  background: linear-gradient(to left, transparent 80%, #e6a7ff 80%);
  > * {
    color: $color-gray-dark3;
  }

  .title {
    font-size: 36px;
    letter-spacing: 0.75em;
  }

  .created-at {
    font-size: 20px;
  }
}
//.container {
//  .card {
//    position: relative;
//    background: #fff;
//    /* 正方形を作る */
//    width: 250px;
//    height: 220px;
//    //background: #e61b8c;
//
//    overflow: hidden;
//
//    .card-inner {
//      position: absolute;
//      top: 50%;
//      left: 50%;
//      transform: translate(-50%, -50%);
//    }
//  }
//}
</style>
