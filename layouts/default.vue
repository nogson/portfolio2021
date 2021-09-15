<template>
  <section class="wrapper">
    <common-header />
    <div class="container">
      <div class="main">
        <Nuxt />
      </div>
    </div>
    <common-footer />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Category from '~/components/Category.vue'
import CommonFooter from '~/components/CommonFooter.vue'
import CommonHeader from '~/components/CommonHeader.vue'

@Component({
  components: { CommonFooter, Category, CommonHeader },
})
export default class extends Vue {
  blog: any[] = []

  created() {
    this.$nuxt.$on('updateContent', this.updateContent)
  }

  updateContent(data: any[]) {
    this.blog = data
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  margin: 32px;

  @include sm() {
    margin: 16px;
  }

  .container {
    height: 100%;
    max-width: 1152px;
    background: $color-black;
    margin: -4px auto 0;
  }
}
</style>
