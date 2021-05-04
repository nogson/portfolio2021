<template>
  <div ref="articlesWrap" class="articles-wrap" @scroll="scroll">
    <span class="center"></span>
    <ul ref="articleSpinner" class="article-spinner">
      <li v-for="(item, index) in items" :key="item.title">
        <dl ref="article" class="article">
          <dt></dt>
          <dd>
            <h3>タイトルが入ります{{ item.title }}</h3>
            <p>
              なんか説明がはいります。なんか説明がはいります。なんか説明がはいります。
            </p>
          </dd>
        </dl>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

const articleHeight = 255

@Component({
  async asyncData({ $content, params }) {},
})
export default class ScrollItems extends Vue {
  articlesWrapHeight: number = 0
  articleSpinnerHeight: number = 0
  items: { title: string }[] = [
    { title: '01' },
    { title: '02' },
    { title: '03' },
    { title: '04' },
    { title: '05' },
    { title: '06' },
    { title: '07' },
    { title: '08' },
    { title: '09' },
    { title: '10' },
    { title: '11' },
    { title: '12' },
    { title: '13' },
    { title: '14' },
    { title: '15' },
  ]

  articleElms: Element[] = []
  articleElemPos: any[] = []

  mounted() {
    this.articlesWrapHeight = this.refs.articlesWrap.clientHeight
    this.articleSpinnerHeight = this.refs.articleSpinner.clientHeight
    this.articleElms = this.refs.article
    // 中央にスクロール
    this.refs.articlesWrap.scrollTop =
      this.articleSpinnerHeight / 2 - this.articlesWrapHeight / 2
    // this.scroll()
  }

  scroll() {
    const center = this.articleSpinnerHeight / 2
    const scrollTop = this.refs.articlesWrap.scrollTop - center

    if (scrollTop >= articleHeight) {
      const items = JSON.parse(JSON.stringify(this.items))
      const startItem = items[0]
      items.shift()
      items.push(startItem)
      this.items = items
      this.refs.articlesWrap.scrollTop = center + articleHeight
      this.articleElms = this.refs.article
    } else if (scrollTop <= -articleHeight) {
      const items = JSON.parse(JSON.stringify(this.items))
      const endItem = items[items.length - 1]
      items.pop()
      items.unshift(endItem)
      this.items = items
      this.refs.articlesWrap.scrollTop = center - articleHeight
      this.articleElms = this.refs.article
    }
  }

  get refs(): any {
    return this.$refs
  }

  get articleStyle() {
    // const center = this.articleSpinnerHeight / 2
    // const scrollTop = this.refs.articlesWrap.scrollTop - center
    // const articlesWrapTop = this.refs.articlesWrap.getBoundingClientRect().top
    return (n: number) => {
      console.log(this.articleElemPos[n])

      return {
        transform: `scale(${this.articleElemPos[n]}, (${this.articleElemPos[n]})`,
      }
    }
  }
}
</script>

<style scoped lang="scss">
.articles-wrap {
  overflow-y: scroll;
  height: 100%;
  -ms-overflow-style: none; /* IE, Edge 対応 */
  scrollbar-width: none;
  &::-webkit-scrollbar {
    /* Chrome, Safari 対応 */
    display: none;
  }
}

.article {
  height: 223px + 32px;
  dt {
    border: 1px solid $color-gray-thin1;
    width: 100%;
    height: 150px;
    margin-bottom: 8px;
  }
  dd {
    h3 {
      font-size: 14px;
      margin-bottom: 8px;
    }
    p {
      font-size: 12px;
    }
  }
}
</style>
