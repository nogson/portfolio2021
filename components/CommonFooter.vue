<template>
  <footer>© satofaction.net All rights reserved.</footer>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class CommonFooter extends Vue {}
</script>

<style scoped lang="scss">
footer {
  text-align: center;
  padding: 64px 0 32px;
  font-size: 12px;
}
</style>
