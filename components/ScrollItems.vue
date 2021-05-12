<template>
  <div ref="itemsWrap" :class="`items-wrap ${type}`" @scroll="scroll">
    <span class="center"></span>
    <ul ref="itemSpinner" class="item-spinner">
      <li v-for="(item, index) in items" :key="index">
        <router-link :to="item.path">
          <dl :ref="`item${index}`" class="item">
            <dt>
              <dynamic-image v-if="item.thumbnail" :path="item.thumbnail" :alt="item.title" margin="0 0 0 0"></dynamic-image></dt>
            <dd>
              <h3 class="title">{{ item.title }}</h3>
              <p class="description">{{ item.description }}</p>
            </dd>
          </dl>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import DynamicImage from "~/components/DynamicImage.vue";

const itemHeight = 255

@Component({
  components: {DynamicImage},
  async asyncData({ $content, params }) {},
})
export default class ScrollItems extends Vue {
  itemsWrapHeight: number = 0
  itemSpinnerHeight: number = 0

  itemElms: Element[] = []
  itemElemPos: any[] = []

  @Prop({ type: Array })
  items!: any[]

  @Prop({ type: String })
  type!: string

  mounted() {
    this.itemsWrapHeight = this.refs.itemsWrap.clientHeight
    this.itemSpinnerHeight = this.refs.itemSpinner.clientHeight
    this.itemElms = this.refs.item
    // 中央にスクロール
    // this.refs.itemsWrap.scrollTop = itemHeight
    // // this.scroll()
  }

  scroll() {
    // 最大のスクロール量　this.itemSpinnerHeight - this.itemsWrapHeight
    const center = this.itemSpinnerHeight / 2
    const scrollTop = this.refs.itemsWrap.scrollTop
    if (
      this.refs.itemsWrap.scrollTop >=
      this.itemSpinnerHeight - this.itemsWrapHeight
    ) {
      // const items = JSON.parse(JSON.stringify(this.items))
      // const startItem = items[0]
      // items.shift()
      // items.push(startItem)
      // this.items = items
      console.log('ok')
    }

    // if (scrollTop >= itemHeight) {
    //   const items = JSON.parse(JSON.stringify(this.items))
    //   const startItem = items[0]
    //   items.shift()
    //   items.push(startItem)
    //   this.items = items
    //   // this.refs.itemsWrap.scrollTop = center + itemHeight
    //   this.itemElms = this.refs.item
    // } else if (scrollTop <= itemHeight) {
    //   const items = JSON.parse(JSON.stringify(this.items))
    //   const endItem = items[items.length - 1]
    //   items.pop()
    //   items.unshift(endItem)
    //   this.items = items
    //   // this.refs.itemsWrap.scrollTop = center - itemHeight
    //   this.itemElms = this.refs.item
    // }
  }

  get refs(): any {
    return this.$refs
  }

  get itemStyle() {
    // const center = this.itemSpinnerHeight / 2
    // const scrollTop = this.refs.itemsWrap.scrollTop - center
    // const itemsWrapTop = this.refs.itemsWrap.getBoundingClientRect().top
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
.items-wrap {
  overflow-y: scroll;
  height: 100%;
  -ms-overflow-style: none; /* IE, Edge 対応 */
  scrollbar-width: none;
  &::-webkit-scrollbar {
    /* Chrome, Safari 対応 */
    display: none;
  }
}

.item {
  //height: 223px + 32px;
  margin-bottom: 32px;
  dt {
    border: 1px solid $color-gray-light1;
    width: 100%;
    margin-bottom: 8px;
  }
  dd {
    .title {
      font-size: 14px;
      margin-bottom: 8px;
    }
    .description {
      font-size: 12px;
    }
  }
}
</style>
