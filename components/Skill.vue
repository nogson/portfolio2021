<template>
  <ul>
    <li v-for="(item, index) in items" :key="index">{{ item }}</li>
  </ul>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  components: {},
})
export default class Skill extends Vue {
  @Prop({ type: Array })
  items!: String[]
}
</script>

<style scoped lang="scss">
ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  li {
    margin: 0 16px 16px 0;
    padding: 2px 8px;
    border: 1px solid $color-black;
    border-radius: 4px;
  }
}
</style>
