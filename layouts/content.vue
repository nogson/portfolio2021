<template>
  <section class="wrapper">
    <common-header />
    <div class="container">
      <div class="main">
        <div class="main-inner">
          <Nuxt />
        </div>
      </div>
      <div class="side-nav">
        <h2>カテゴリ</h2>
        <nav>
          <ul class="category">
            <li
              v-for="item in category"
              :key="item"
              @click="showCategoryPage(item)"
            >
              {{ item }}
            </li>
          </ul>
        </nav>
        <h2>新規記事</h2>
        <nav>
          <ul class="category">
            <li
              v-for="item in blogsData"
              :key="item.slug"
              @click="showDetailPage(item)"
            >
              {{ item.title }}
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <common-footer />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Category from '~/components/Category.vue'
import CommonFooter from '~/components/CommonFooter.vue'

@Component({
  components: { CommonFooter, Category },
})
export default class extends Vue {
  categoryData: string[] = []
  blogsData: any[] = []

  created() {
    this.$nuxt.$on('updateContent', this.updateContent)
  }

  updateContent(data: any) {
    this.categoryData = data.category
    this.blogsData = data.blogs
  }

  showCategoryPage(category: string) {
    this.$router.push({
      path: `/category/${category}`,
    })
  }

  showDetailPage(item: any) {
    this.$router.push(item.path)
  }

  get category() {
    const category = this.categoryData.map((d) => d.split(',')).flat()
    return Array.from(new Set(category))
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  margin: 32px;

  .container {
    height: 100%;
    max-width: 1152px;
    background: $color-black;
    margin: -4px auto 0;
    display: grid;
    grid-template-columns: 1fr 300px;
    grid-template-rows: auto;
    gap: $common-margin $common-margin;

    @include sm() {
      display: block;
    }
  }
}
.main {
  min-height: 100vh;
  background: $color-background;
  margin: $common-margin 0 $common-margin $common-margin;
  padding: 32px;

  .main-inner {
    max-width: 640px;
    margin: 0 auto;
  }

  @include sm() {
    padding: 32px;
    border: $common-margin solid $color-black;
  }
}

.side-nav {
  background: $color-background;
  margin: $common-margin $common-margin $common-margin 0;
  padding: 24px;
  h2 {
    font-size: 16px;
    margin-top: 16px;
  }
  nav {
    margin-bottom: 40px;
  }
  @include sm() {
    display: none;
  }
}
.category {
  li {
    margin-top: 16px;
    font-size: 12px;
    cursor: pointer;
  }
}
</style>
