<template>
  <section>
    <h1>{{ this.slug }}</h1>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  components: {},
  async asyncData({ $content, params }) {
    // URIから変数を取得 /note/{_slug}
    const slug = params.slug
    return {
      slug,
      note: await $content('note').sortBy('create_at', 'desc').fetch(),
    }
  },
})
export default class Category extends Vue {
  slug: any = null
  note: any = null
  head() {
    return {
      title: this.slug,
      titleTemplate: '%s | Satofaction.net',
    }
  }

  created() {
    this.$nuxt.$emit('updateContent', this.note)
  }
}
</script>

<style scoped></style>
