<template>
  <section class="content">
    <div class="content-head">
      <h1 class="title-main">{{ blog.title }}</h1>
      <p class="create-at">{{ formatDateToString(blog.createdAt) }}</p>
    </div>
    <nuxt-content :document="blog" />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import moment from 'moment'
import { IContentItem } from '~/interface/IContent'
import { ICategory } from '~/interface/ICategory'

@Component({
  layout: 'content',
  components: {},
  async asyncData({ $content, params }) {
    // URIから変数を取得 /blog/{_slug}
    const slug = params.slug
    return {
      // content/blog/{_slug}.mdのマークダウンを取得
      blog: await $content('blog/' + slug).fetch(),
      blogs: await $content('blog').sortBy('create_at', 'desc').fetch(),
      category: await $content('blog').only(['category']).fetch(),
    }
  },
})
export default class Slug extends Vue {
  blog: IContentItem | null = null
  blogs: IContentItem[] = []
  category: ICategory[] = []

  head() {
    return {
      title: this.blog!.title,
      titleTemplate: '%s | Satofaction.net',
    }
  }

  created() {
    const category: string[] = this.category.map((d: ICategory) => d.category)
    const blogs: IContentItem[] = this.blogs
    this.$nuxt.$emit('updateContent', { blogs, category })
  }

  formatDateToString(date: string): string {
    return moment(date).format('YYYY/MM/DD')
  }
}
</script>

<style lang="scss">
.content {
  line-height: 1.8;
}
.content-head {
  margin-bottom: 40px;
}
.top-image {
  margin-bottom: 24px;
}
.create-at {
  font-size: 12px;
}
</style>
