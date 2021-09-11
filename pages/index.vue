<template>
  <div ref="cardContainer" class="card_container">
    <div class="header">
      <div class="padding-all"><logo /></div>
      <div class="header-description padding-all">
        このサイトは、中年サラリーマンデザイナー佐藤文彦のポートフォリオサイトです。
        なにかなにかなにかなにかなにかなにかなにかなにかなにかなにかなにかなにかな
        なにかなにかなにかなにかなにかなにかなにかなにかなにかなにか
      </div>
    </div>
    <card
      v-for="(item, index) in items"
      :key="item.slug"
      :item="item"
      :index="index"
    />
  </div>
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
import Logo from '~/components/Logo.vue'

@Component({
  components: {
    Logo,
    ContentListMenu,
    TopParts,
    DynamicImage,
    Card,
    ScrollItems,
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

    return items
  }
}
</script>

<style scoped lang="scss">
.card_container {
  overflow: hidden;
}
.header {
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: $common-margin;
  margin: $common-margin;
  > * {
    background: $color-background;
    display: flex;
    align-items: center;
  }
}
.header-description {
  font-size: 12px;
}
</style>
