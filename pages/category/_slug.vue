<template>
  <section>
    <h1 class="title-main">{{ slug }}</h1>
    <card-list :contents="content" />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { IContentItem } from '~/interface/IContent'

@Component({
  async asyncData({ $content, params }) {
    const slug = params.slug
    return {
      slug,
      blog: await $content('blog').sortBy('create_at', 'desc').fetch(),
      category: await $content('blog').only(['category']).fetch(),
    }
  },
})
export default class Category extends Vue {
  slug!: string
  category!: string[]
  blog!: IContentItem[]
  head() {
    return {
      title: this.slug,
      titleTemplate: '%s | Satofaction.net',
    }
  }

  get content() {
    return this.blog.filter((d: IContentItem) => d.category.includes(this.slug))
  }
}
</script>

<style lang="scss" scoped>
.title-main {
  background: $color-background;
  margin: $common-margin;
  padding: 16px 36px;
  display: block;
}
.card_container {
  margin-top: -4px;
}
</style>
