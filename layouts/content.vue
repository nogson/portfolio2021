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

  created() {
    this.$nuxt.$on('updateContent', this.updateContent)
  }

  updateContent(data: string[]) {
    this.categoryData = data
  }

  showCategoryPage(category: string) {
    this.$router.push({
      path: `/category/${category}`,
    })
  }

  get category() {
    const category = this.categoryData.map((d) => d.split(',')).flat()
    return Array.from(new Set(category))
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  background-image: url('~@/assets/images/bg.png');
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
}

.side-nav {
  h2 {
    font-size: 16px;
    margin-top: 16px;
  }
}
.category {
  li {
    margin-top: 16px;
    font-size: 14px;
    cursor: pointer;
  }
}
</style>
