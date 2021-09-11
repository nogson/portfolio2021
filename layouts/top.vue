<template>
  <section class="container">
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
  contents: any = null
  created() {
    this.$nuxt.$on('updateContent', this.updateContent)
  }

  updateContent(contents: any) {
    this.contents = contents
  }
}
</script>

<style scoped lang="scss">
.container {
  min-height: 100%;
}

.hero-image {
  height: 600px;
  //background: radial-gradient(
  //  farthest-corner at 25% -30%,
  //  lighten($color-black, 30%) 0%,
  //  $color-black 70%
  //);

  padding: 100px 32px;

  .hero-image-inner {
    background-image: url('~@/assets/images/bg_1.png');
    background-size: cover;
    mix-blend-mode: overlay;
    height: 100%;
  }
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
