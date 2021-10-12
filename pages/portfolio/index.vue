<template>
  <card-list :contents="contents" />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import CardList from '~/components/CardList.vue'

@Component({
  components: {
    CardList,
  },
  async asyncData({ $content }) {
    const contents = await $content('portfolio').fetch()
    return { contents }
  },
})
export default class Portfolio extends Vue {
  head() {
    return {
      title: 'Portfolio | Satofactoin.net',
      bodyAttrs: {
        class: 'portfolio',
      },
    }
  }
}
</script>

<style scoped lang="scss"></style>
