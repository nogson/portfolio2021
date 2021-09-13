<template>
  <div class="card_container">
    <template v-for="(itemArr, i) in items">
      <div :key="i" class="card-list">
        <card
          v-for="(item, j) in itemArr"
          :key="item.slug"
          :class="`card-${j}`"
          :klass="`card-${j}`"
          :item="item"
          :index="itemIndex(i, j)"
        />
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Card from '~/components/Card.vue'
import ContentListMenu from '~/components/ContentListMenu.vue'
import Logo from '~/components/Logo.vue'

@Component({
  components: {
    Logo,
    ContentListMenu,
    Card,
  },
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
  selectDisplayCardType: string = 'all'

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
  }

  changeDisplayCardType(type: string) {
    this.selectDisplayCardType = type
  }

  get items() {
    let items = []
    switch (this.selectDisplayCardType) {
      case 'all':
        items = [this.note, this.portfolio].flat()
        break
      case 'blog':
        items = this.note
        break
      case 'portfolio':
        items = this.portfolio
    }

    items.sort(function (a, b) {
      if (a.created_at > b.created_at) {
        return -1
      } else {
        return 1
      }
    })

    const loopLength = Math.ceil(items.length / 10)
    const itemArr = []
    for (let i = 0; i < loopLength; i++) {
      itemArr[i] = items.slice(10 * i, 10 * i + 10)
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
}
</style>
