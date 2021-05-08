<template>
  <div ref="articlesWrap" class="articles-wrap" @scroll="scroll">
    <span class="center"></span>
    <ul ref="articleSpinner" class="article-spinner">
      <li v-for="(item, index) in items" :key="item.title">
        <router-link :to="item.path">
          <dl :ref="`article${index}`" class="article">
            <dt></dt>
            <dd>
              <h3>タイトルが入ります{{ item.title }}</h3>
              <p>
                なんか説明がはいります。なんか説明がはいります。なんか説明がはいります。
              </p>
            </dd>
          </dl>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

const articleHeight = 255

@Component({
  async asyncData({ $content, params }) {},
})
export default class ScrollItems extends Vue {
  articlesWrapHeight: number = 0
  articleSpinnerHeight: number = 0

  articleElms: Element[] = []
  articleElemPos: any[] = []

  @Prop({ type: Array })
  items!: any[]

  mounted() {
    this.articlesWrapHeight = this.refs.articlesWrap.clientHeight
    this.articleSpinnerHeight = this.refs.articleSpinner.clientHeight
    this.articleElms = this.refs.article
    // 中央にスクロール
    // this.refs.articlesWrap.scrollTop = articleHeight
    // // this.scroll()
  }

  scroll() {
    // 最大のスクロール量　this.articleSpinnerHeight - this.articlesWrapHeight
    const center = this.articleSpinnerHeight / 2
    const scrollTop = this.refs.articlesWrap.scrollTop
    if (
      this.refs.articlesWrap.scrollTop >=
      this.articleSpinnerHeight - this.articlesWrapHeight
    ) {
      // const items = JSON.parse(JSON.stringify(this.items))
      // const startItem = items[0]
      // items.shift()
      // items.push(startItem)
      // this.items = items
      console.log('ok')
    }

    // if (scrollTop >= articleHeight) {
    //   const items = JSON.parse(JSON.stringify(this.items))
    //   const startItem = items[0]
    //   items.shift()
    //   items.push(startItem)
    //   this.items = items
    //   // this.refs.articlesWrap.scrollTop = center + articleHeight
    //   this.articleElms = this.refs.article
    // } else if (scrollTop <= articleHeight) {
    //   const items = JSON.parse(JSON.stringify(this.items))
    //   const endItem = items[items.length - 1]
    //   items.pop()
    //   items.unshift(endItem)
    //   this.items = items
    //   // this.refs.articlesWrap.scrollTop = center - articleHeight
    //   this.articleElms = this.refs.article
    // }
  }

  get refs(): any {
    return this.$refs
  }

  get articleStyle() {
    // const center = this.articleSpinnerHeight / 2
    // const scrollTop = this.refs.articlesWrap.scrollTop - center
    // const articlesWrapTop = this.refs.articlesWrap.getBoundingClientRect().top
    return (elm: any) => {
      if (elm) {
        return elm[0].getBoundingClientRect().top
        // console.log(elm[0].getBoundingClientRect().top)
      }

      return {
        transform: `scale(1, 1)`,
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
    border: 1px solid $color-gray-light1;
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
