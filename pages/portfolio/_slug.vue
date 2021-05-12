<template>
  <section class="content">
    <div class="content-head">
      <div v-if="portfolio.top_image" class="top-image">
        <img
          width="100%"
          :src="require(`~/content/portfolio/images/${portfolio.top_image}`)"
          :alt="portfolio.title"
        />
      </div>
      <h1 class="title-main">{{ portfolio.title }}</h1>
      <p class="create-at" v-if="portfolio.created_at">{{ formatDateToString(portfolio.created_at) }}</p>
    </div>

    <nuxt-content :document="portfolio" />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import moment from 'moment'

@Component({
  components: {},
  async asyncData({ $content, params }) {
    const slug = params.slug
    return {
      // content/note/{_slug}.mdのマークダウンを取得
      portfolio: await $content('portfolio/' + slug).fetch(),
    }
  },
})
export default class Slug extends Vue {
  portfolio: any = null
  head() {
    return {
      title: this.portfolio.title,
      titleTemplate: '%s | Satofaction.net',
    }
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
.create-at {
  color: $color-gray-dark2;
  font-size: 12px;
}
</style>
