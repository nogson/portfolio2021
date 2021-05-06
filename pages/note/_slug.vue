<template>
  <section class="content">
    <div class="content-head">
      <div class="top-image">
        <img
          width="100%"
          :src="require(`~/content/note/images/${note.top_image}`)"
          :alt="note.title"
        />
      </div>
      <h1 class="title-main">{{ note.title }}</h1>
      <p class="create-at">{{ formatDateToString(note.created_at) }}</p>
    </div>

    <nuxt-content :document="note" />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import * as moment from 'moment'

@Component({
  components: {},
  async asyncData({ $content, params }) {
    // URIから変数を取得 /note/{_slug}
    const slug = params.slug
    return {
      // content/note/{_slug}.mdのマークダウンを取得
      note: await $content('note/' + slug).fetch(),
    }
  },
})
export default class Slug extends Vue {
  note: any = null
  head() {
    return {
      title: this.note.title,
      titleTemplate: '%s | Satofaction.net',
    }
  }

  get helloWorld(): string {
    return 'Hello world!'
  }

  formatDateToString(date: string): string {
    // return moment(date).format('YYYY/MM/DD')
    return date
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
.create-at {
  color: $color-gray-dark2;
  font-size: 12px;
}
</style>
