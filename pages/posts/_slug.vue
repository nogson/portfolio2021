<template>
  <section>
    <div class="top-image">
      <img
        :src="require(`~/content/posts/images/${post.top_image}`)"
        :alt="post.title"
      />
    </div>
    <h1 class="title">{{ post.title }}</h1>
    <p>{{ post.created_at }}</p>
    <nuxt-content :document="post" />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

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
  get helloWorld(): string {
    return 'Hello world!'
  }
}
</script>

<style scoped lang="scss">
.top-image {
  margin-bottom: 24px;
}
.title {
  font-size: 24px;
}
</style>
