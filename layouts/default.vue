<template>
  <section class="wrapper">
    <common-header />
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
  //background-image: url('~@/assets/images/bg.png');
}
.container {
  max-width: 620px;
  margin: 32px auto;
  min-height: 100vh;
}
.main {
  @include sm() {
    width: 100%;
    padding: 0 32px;
    box-sizing: border-box;
  }
}
</style>
