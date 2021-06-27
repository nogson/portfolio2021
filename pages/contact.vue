<template>
  <section class="about">
    <h1 class="title-main margin-b-l">Contact</h1>
    <div>制作の依頼・ご相談などお気軽にお問い合わせくださいませ。</div>
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLScy1FaPsaeA9a7Pv9N8BMBvNhevnLAnRSWnbrsrlpYfDKFB9g/viewform?embedded=true"
      width="640"
      height="808"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
      >読み込んでいます…</iframe
    >
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  components: {},
})
export default class Contact extends Vue {}
</script>

<style scoped lang="scss">
::v-deep iframe .freebirdFormviewerViewHeaderHeader {
  display: none !important;
}
</style>
