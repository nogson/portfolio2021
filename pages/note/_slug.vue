<template>
  <section class="content">
    <div class="content-head">
      <h1 class="title-main">{{ note.title }}</h1>
      <p class="create-at">{{ formatDateToString(note.created_at) }}</p>
    </div>
    <nuxt-content :document="note" />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import moment from 'moment'

@Component({
  layout: 'content',
  components: {},
  async asyncData({ $content, params }) {
    // URIから変数を取得 /note/{_slug}
    const slug = params.slug
    return {
      // content/note/{_slug}.mdのマークダウンを取得
      note: await $content('note/' + slug).fetch(),
      notes: await $content('note').sortBy('create_at', 'desc').fetch(),
      category: await $content('note').only(['category']).fetch(),
    }
  },
})
export default class Slug extends Vue {
  note: any = null
  notes: any = null
  category: any = null
  //
  head() {
    return {
      title: this.note.title,
      titleTemplate: '%s | Satofaction.net',
    }
  }

  created() {
    const category = this.category.map((d: any) => d.category)
    const notes = this.notes
    this.$nuxt.$emit('updateContent', { notes, category })
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
  margin-bottom: 40px;
}
.top-image {
  margin-bottom: 24px;
}
.create-at {
  font-size: 12px;
}
</style>
