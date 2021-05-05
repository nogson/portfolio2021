<template>
  <section class="content">
    <div class="content-head">
      <div class="top-image">
        <img
          width="100%"
          :src="require(`~/content/posts/images/${post.top_image}`)"
          :alt="post.title"
        />
      </div>
      <h1 class="title">{{ post.title }}</h1>
      <p class="create-at">{{ formatDateToString(post.created_at) }}</p>
    </div>

    <nuxt-content :document="post" />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import * as moment from 'moment'

@Component({
  components: {},
  async asyncData({ $content, params }) {
    // URIから変数を取得 /posts/{_slug}
    const slug = params.slug
    return {
      // content/posts/{_slug}.mdのマークダウンを取得
      post: await $content('posts/' + slug).fetch(),
    }
  },
})
export default class Slug extends Vue {
  post: any = null
  head() {
    return {
      title: this.post.title,
      titleTemplate: '% | Fumihiko Sato Portfolio',
    }
  }

  get helloWorld(): string {
    return 'Hello world!'
  }

  formatDateToString(date: string): string {
    return moment(date).format('YYYY/MM/DD')
  }
}
</script>

<style scoped lang="scss">
.content {
  line-height: 1.8;
}
.content-head {
  margin-bottom: 32px;
}
.top-image {
  margin-bottom: 24px;
}
.title {
  font-size: 24px;
}
.create-at {
  color: $color-gray-dark2;
  font-size: 12px;
}
</style>
