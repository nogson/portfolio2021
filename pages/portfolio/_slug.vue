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
      <p v-if="portfolio.createdAt" class="create-at">
        {{ formatDateToString(portfolio.createdAt) }}
      </p>
    </div>
    <div class="content-body">
      <div class="content-body-inner">
        <nuxt-content :document="portfolio" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import moment from 'moment'
import { IContentItem } from '@/interface/IContent'

@Component({
  components: {},
  async asyncData({ $content, params }) {
    const slug = params.slug
    const portfolio = await $content('portfolio/' + slug).fetch()
    return { portfolio }
  },
})
export default class Slug extends Vue {
  portfolio: IContentItem | null = null
  head() {
    return {
      title: this.portfolio!.title,
      titleTemplate: '%s | Satofaction.net',
    }
  }

  private formatDateToString(date: string): string {
    return moment(date).format('YYYY年MM月DD日')
  }
}
</script>

<style scoped lang="scss">
.content {
  line-height: 1.8;
}
.content-head {
  margin: $common-margin;
  background: $color-background;
  padding: 16px 36px;
}
.content-body {
  margin: $common-margin;
  background: $color-background;
  padding: 36px;
}
.content-body-inner {
  max-width: 640px;
  margin: 0 auto;
}
.top-image {
  margin-bottom: 24px;
}
.create-at {
  color: $color-gray-dark2;
  font-size: 12px;
}
</style>
