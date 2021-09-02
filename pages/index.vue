<template>
  <section class="wrapper">
    <nav class="nav">
      <ul>
        <li class="act">All</li>
        <li>Blog</li>
        <li>Portfolio</li>
      </ul>
    </nav>
    <div class="card_container">
      <div v-for="item in items" :key="item.slug" class="card">
        <div>
          <nuxt-link :to="item.path">
            <dynamic-image
              class="img"
              :path="item.thumbnail"
              :alt="item.title"
              :use-filter="true"
              margin="0 0 16px 0"
            />
            <p class="created-at">
              <span :class="`item_type ${type(item)}`"></span>
              <span>
                {{ formatDateToString(item.created_at) }}
              </span>
            </p>
            <p class="title">
              {{ item.title }}
            </p>
            <p class="description">{{ item.description }}</p>
          </nuxt-link>
        </div>
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
    this.$nuxt.$emit('updateContent', {
      portfolio: this.portfolio,
      note: this.note,
    })
    // this.$nuxt.$on('changeType', (type: string) => this.changeType(type))
  }

  mounted() {
    // if (typeof this.$redrawVueMasonry === 'function') {
    //   console.log('ok')
    //   this.$redrawVueMasonry()
    // }
  }

  formatDateToString(date: string): string {
    return moment(date).format('YYYY/MM/DD')
  }

  cardStyle() {
    return {
      width: Math.floor(Math.random() * 20) + 10 + '%',
    }
  }

  get items() {
    return [this.note, this.portfolio].flat()
  }

  get type() {
    return (item: any): string => {
      return item.dir === '/note' ? 'note' : 'portfolio'
    }
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  padding: 24px 32px;
}
.nav {
  margin-bottom: 24px;
  ul {
    display: flex;
    li {
      cursor: pointer;
      font-weight: bold;
      font-size: 14px;
      margin-right: 16px;
      padding: 0 4px;
      &.act {
        border-bottom: 2px solid $color-secondly;
      }
    }
  }
}

.card_container {
  display: flex;
  flex-wrap: wrap;
}
.card {
  margin-right: 32px;
  box-sizing: border-box;
  //writing-mode: vertical-rl;
  //background: linear-gradient(to left, transparent 80%, #e6a7ff 80%);
  width: calc((100% - 32px * 3) / 4);
  margin-bottom: 32px;
  box-sizing: border-box;

  &:nth-child(4n) {
    margin-right: 0;
  }

  .img {
    border: 4px solid $color-secondly;
  }

  .title {
    margin-top: 8px;
    font-weight: bold;
    font-size: 1em;
    color: $color-link;
  }

  .description {
    margin-top: 4px;
    color: $color-gray-dark3;
    font-size: 0.7em;
  }

  .created-at {
    color: $color-gray-dark3;
    font-size: 0.7em;
  }
}

.item_type {
  color: #fff;
  padding: 2px 4px;
  margin-right: 8px;
  font-size: 5px;
}
.note {
  &:after {
    content: 'Blog';
  }
  background: $color-note;
}

.portfolio {
  &:after {
    content: 'Portfolio';
  }
  background: $color-portfolio;
}
</style>
