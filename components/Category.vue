<template>
  <div>
    <h3 class="title">Category</h3>
    <ul class="category">
      <li v-for="(item, index) in category" :key="index">
        <nuxt-link :to="`/category/${item}`">{{ item }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  components: {},
})
export default class Category extends Vue {
  @Prop({ type: Array })
  items!: any[]

  get category(): String[] {
    const category: string[] = []
    this.items.forEach((d) => {
      console.log(d.category)
      category.push(d.category.split(','))
    })

    return [...new Set(category.flat())]
  }
}
</script>

<style scoped lang="scss">
.title {
  font-size: 14px;
  margin-bottom: 8px;
}
.category {
  li {
    font-size: 12px;
    margin-bottom: 8px;
  }
}
</style>
