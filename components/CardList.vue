<template>
  <div class="card_container">
    <template v-for="(itemArr, i) in items">
      <div :key="i" class="card-list">
        <card
          v-for="(item, j) in itemArr"
          :key="item.slug"
          :klass="`card-${j}`"
          :item="item"
          :index="itemIndex(i, j)"
        />
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import Card from '~/components/Card.vue'
import { IContentItem, IContentEmptyItem } from '~/interface/IContent'

@Component({
  components: {
    Card,
  },
})
export default class CardList extends Vue {
  items!: IContentItem[][] | IContentEmptyItem[][]

  @Prop({ type: Array })
  contents!: IContentItem[]

  created() {
    this.items = this.getItems()
  }

  getItems(): IContentItem[][] | IContentEmptyItem[][] {
    const itemGroupMinLength = 10
    this.contents.sort(function (a, b) {
      if (a.createdAt > b.createdAt) {
        return -1
      } else {
        return 1
      }
    })

    const loopLength = Math.ceil(this.contents.length / itemGroupMinLength)
    const itemArr = []
    for (let i = 0; i < loopLength; i++) {
      itemArr[i] = this.contents.slice(
        itemGroupMinLength * i,
        itemGroupMinLength * i + itemGroupMinLength
      )
    }

    const arr = itemArr.map((items) => {
      if (itemGroupMinLength > items.length) {
        const diff = itemGroupMinLength - items.length
        const undefinedItem = [...Array(diff)].map((d, i) => {// eslint-disable-line
          return {
            slug: `undefined_${i}`,
          }
        })
        return [items, undefinedItem].flat()
      }
      return items
    })

    return arr
  }

  get itemIndex() {
    return (i: number, j: number) => {
      const str = '00' + (i * 10 + 1 + j)
      return str.slice(-2)
    }
  }
}
</script>

<style scoped lang="scss">
.card_container {
  overflow: hidden;
}

.card-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto auto;
  gap: $common-margin $common-margin;
  margin: $common-margin;
  @include sm() {
    display: block;
  }
}
</style>
