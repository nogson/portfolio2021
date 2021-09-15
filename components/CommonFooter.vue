<template>
  <footer>
    <nav>
      <ul>
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/portfolio">Portfolio</nuxt-link></li>
        <li><nuxt-link to="/blog">Blog</nuxt-link></li>
        <li><nuxt-link to="/about">About</nuxt-link></li>
        <li><a href="https://forms.gle/6woK2MTC8s94QBid7">Contact</a></li>
      </ul>
    </nav>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class CommonFooter extends Vue {}
</script>

<style scoped lang="scss">
footer {
  max-width: 1152px;
  font-size: 16px;
  border: 4px solid $color-black;
  position: sticky;
  bottom: 0;
  background: #fff;
  margin: -4px auto 0;
  padding: 24px;
  @include sm() {
    font-size: 14px;
    padding: 16px;
  }
  ul {
    display: flex;
    justify-content: center;
    font-family: Helvetica;
    font-weight: bold;
    li {
      padding: 0 12px;
    }
  }

}
</style>
