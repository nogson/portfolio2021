<template>
  <div class="articles">
    <div>
      <scroll-items />
    </div>
    <div>
      <scroll-items />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ScrollItems from '~/components/ScrollItems.vue'

@Component({
  components: { ScrollItems },
  async asyncData({ $content, params }) {},
})
export default class Index extends Vue {}
</script>

<style scoped lang="scss">
.articles {
  display: flex;
  height: 100%;

  > * {
    margin-right: 24px;
  }
}
</style>
