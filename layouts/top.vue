<template>
  <section class="container">
    <common-header type="fixed" />
    <div class="main">
      <Nuxt />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Category from '~/components/Category.vue'
import CommonHeader from '~/components/CommonHeader.vue'

@Component({
  components: { CommonHeader, Category },
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
.container {
  padding: 48px 0;
}

.sub-nav {
  position: fixed;
  right: 24px;
  top: 16px;
  z-index: 100;
  box-sizing: content-box;
  padding: 8px;
  background: rgba(#fff, 0.9);
}
</style>
