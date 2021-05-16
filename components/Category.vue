<template>
  <div>
    <ul>
      <li v-for="(item, index) in items" :key="index">{{ item.title }}</li>
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
    const category = []
    this.items.forEach((d) => {
      category.push(d.split(','))
    })

    console.log(category)

    return ['a']
  }
}
</script>

<style scoped lang="scss">
ul {
  li {
  }
}
</style>
