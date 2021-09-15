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

@Component({
  components: {
    Card,
  },
})
export default class CardList extends Vue {
  items!: any[]

  @Prop({ type: Array })
  contents!: any[]

  created() {
    this.items = this.getItems()
  }

  getItems() {
    this.contents.sort(function (a, b) {
      if (a.created_at > b.created_at) {
        return -1
      } else {
        return 1
      }
    })

    const loopLength = Math.ceil(this.contents.length / 10)
    const itemArr = []
    for (let i = 0; i < loopLength; i++) {
      itemArr[i] = this.contents.slice(10 * i, 10 * i + 10)
    }

    return itemArr
  }

  get itemIndex() {
    return (i, j) => {
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
  @include sm(){
    display: block;
  }
}
</style>
