<template>
  <section class="wrapper">
    <common-header />
    <div class="container">
      <div class="main">
        <Nuxt />
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
              v-for="item in notesData"
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
  notesData: any[] = []

  created() {
    this.$nuxt.$on('updateContent', this.updateContent)
  }

  updateContent(data: any) {
    console.log(data)
    this.categoryData = data.category
    this.notesData = data.notes
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
 // background-image: url('~@/assets/images/bg.png');
}

.container {
  display: flex;
  justify-content: center;
  margin: 32px 0;
}
.main {
  width: 620px;
  margin: 0 48px;
  min-height: 100vh;
  @include md() {
    width: 100%;
    padding: 0 32px;
    margin: 0;
    box-sizing: border-box;
  }
}

.side-nav {
  width: 200px;
  h2 {
    font-size: 16px;
    margin-top: 16px;
  }
  nav {
    margin-bottom: 40px;
  }
  @include md() {
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
