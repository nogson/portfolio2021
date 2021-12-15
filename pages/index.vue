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
    const blog = await $content('blog').fetch()
    console.log(blog)
    const portfolio = await $content('portfolio').fetch()
    const contents = [blog, portfolio].flat()
    return { contents }
  },
})
export default class Index extends Vue {
  head() {
    return {
      bodyAttrs: {
        class: 'top',
      },
    }
  }
}
</script>

<style scoped lang="scss"></style>
