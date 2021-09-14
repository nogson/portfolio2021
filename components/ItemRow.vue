<template>
  <article class="item">
    <nuxt-link :to="link">
      <h2>{{ item.title }}</h2>
      <p class="item-date">{{ formatDateToString(item.created_at) }}</p>
      <p class="item-description">{{ item.description }}</p>
    </nuxt-link>
  </article>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'nuxt-property-decorator'
import moment from 'moment'
import DynamicImage from '~/components/DynamicImage.vue'

@Component({
  components: { DynamicImage },
})
export default class ItemRow extends Vue {
  @Prop({ type: Object })
  item!: any

  formatDateToString(date: string): string {
    return moment(date).format('YYYY/MM/DD')
  }

  get link() {
    return `/blog/${this.item.slug}`
  }
}
</script>

<style scoped lang="scss">
.item {
  backdrop-filter: blur(3px);
  box-shadow: 0px 0px 5px rgba(#000, 0.2);
  padding: 24px;
  h2 {
    font-size: 16px;
    margin-bottom: 4px;
  }

  .item-date {
    font-size: 10px;
    margin-bottom: 16px;
  }

  .item-description {
    font-size: 14px;
  }
}
</style>
