<template>
  <section class="wrapper">
    <div
      v-masonry
      class="container"
      transition-duration="0.3s"
      item-selector=".card"
    >
      <div v-for="item in items" :key="item.slug" v-masonry-tile class="card">
        <nuxt-link :to="item.path">
          <dynamic-image
            class="img"
            :path="item.thumbnail"
            :alt="item.title"
            :use-filter="true"
            margin="0 0 16px 0"
          />
          <p class="created-at">
            {{ formatDateToString(item.created_at) }}
          </p>
          <p class="title">{{ item.title }}</p>
          <p class="description">{{ item.description }}</p>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

// import { gsap } from 'gsap'
import moment from 'moment'
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
    console.log('kk')
    this.$nuxt.$emit('updateContent', {
      portfolio: this.portfolio,
      note: this.note,
    })
    // this.$nuxt.$on('changeType', (type: string) => this.changeType(type))

    setInterval(() => {})
  }

  mounted() {
    // if (typeof this.$redrawVueMasonry === 'function') {
    //   console.log('ok')
    //   this.$redrawVueMasonry()
    // }
  }

  formatDateToString(date: string): string {
    return moment(date).format('YYYY / MM / DD')
  }

  cardStyle() {
    return {
      width: Math.floor(Math.random() * 20) + 10 + '%',
    }
  }

  get items() {
    return [this.note, this.portfolio].flat()
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  padding: 24px 32px;
}
.card {
  padding: 0 24px;
  box-sizing: border-box;
  //writing-mode: vertical-rl;
  //background: linear-gradient(to left, transparent 80%, #e6a7ff 80%);
  width: calc((100%) / 4);
  margin-bottom: 32px;
  box-sizing: border-box;

  .img {
    border: 4px solid $color-secondly;
  }

  .title {
    font-weight: bold;
    font-size: 1em;
    color: $color-link;
  }

  .description {
    color: $color-gray-dark3;
    font-size: 0.7em;
  }

  .created-at {
    color: $color-gray-dark3;
    font-size: 0.7em;
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
