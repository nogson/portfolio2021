<template>
  <section class="wrapper">
    <div class="container">
      <div class="main">
        <Nuxt />
      </div>
      <!--      <div class="sub-nav">-->
      <!--        <category :items="note" />-->
      <!--      </div>-->
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
  note: any[] = []

  created() {
    this.$nuxt.$on('updateContent', this.updateContent)
  }

  updateContent(data: any[]) {
    this.note = data
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  margin: 32px;

  .container {
    max-width: 1152px;
    background: $color-black;
    margin: 0 auto;
  }
}
</style>
