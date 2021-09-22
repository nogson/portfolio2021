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
    const contents = await $content('blog').fetch()
    return { contents }
  },
})
export default class Blog extends Vue {
  head() {
    return {
      title: 'Blog | Satofactoin.net',
      bodyAttrs: {
        class: 'blog',
      },
    }
  }
}
</script>

<style scoped lang="scss"></style>
