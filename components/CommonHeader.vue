<template>
  <header class="header">
    <div class="padding-all"><logo /></div>
    <div class="header-description padding-all">
      このサイトは、中年サラリーマンデザイナー佐藤文彦のポートフォリオサイトです。
      なにかなにかなにかなにかなにかなにかなにかなにかなにかなにかなにかなにかな
      なにかなにかなにかなにかなにかなにかなにかなにかなにかなにか
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Logo from '~/components/Logo.vue'

@Component({
  components: { Logo },
})
export default class CommonHeader extends Vue {}
</script>

<style scoped lang="scss">
.header {
  max-width: 1152px;
  border: 4px solid $color-black;
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: $common-margin;
  background: $color-black;
  margin: 0 auto;
  > * {
    background: $color-background;
    display: flex;
    align-items: center;
  }

  @include sm() {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    row-gap: $common-margin ;
  }
}
.header-description {
  font-size: 12px;
}
</style>
