<template>
  <section>
    <h1 class="title-main">{{ slug }}</h1>
    <div v-for="item in content" :key="item.slug" class="item-row">
      <item-row :item="item" />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ItemRow from '~/components/ItemRow.vue'

@Component({
  layout: 'content',
  components: { ItemRow },
  async asyncData({ $content, params }) {
    const slug = params.slug
    return {
      slug,
      note: await $content('note')
        .where({ category: slug })
        .sortBy('create_at', 'desc')
        .fetch(),
      category: await $content('note').only(['category']).fetch(),
    }
  },
})
export default class Category extends Vue {
  head() {
    return {
      title: this.slug,
      titleTemplate: '%s | Satofaction.net',
    }
  }

  created() {
    this.$nuxt.$emit(
      'updateContent',
      this.category.map((d) => d.category)
    )
  }

  get content() {
    console.log(this.note)
    return this.note.filter((d) => d.category.includes(this.slug))
  }
}
</script>

<style lang="scss" scoped>
.item-row {
  margin-top: 32px;
}
</style>
