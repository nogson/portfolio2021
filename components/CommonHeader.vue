<template>
  <div class="header-nav" :class="{ fixed: type === 'fixed' }">
    <h1>
      <nuxt-link to="/"
        ><img src="@/assets/images/logo.svg" width="150"
      /></nuxt-link>
    </h1>
    <nav class="header-nav-li">
      <ul>
        <li @click="changeType('portfolio')">Portfolio</li>
        <li @click="changeType('note')">Blog</li>
        <li><nuxt-link to="/about">About</nuxt-link></li>
        <li><a href="https://forms.gle/6woK2MTC8s94QBid7">Contact</a></li>
      </ul>
    </nav>
    <!--      <div class="sub-nav">-->
    <!--        <category :items="note" />-->
    <!--      </div>-->
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({})
export default class CommonHeader extends Vue {
  @Prop({ type: String })
  type!: String

  changeType(type: string) {
    this.$router.push({ path: '/', query: { type } })
  }
}
</script>

<style scoped lang="scss">
.header-nav {
  position: sticky;
  top: 0px;
  z-index: 100;
  padding: 24px 32px;
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  background: rgba(#fff, 0.7);
  box-shadow: 0px 2px 3px rgba(#000, 0.1);
  &.fixed {
    position: fixed;
    left: 0;
    top: 0;
    background: none;
    box-shadow: none;
  }

  h1 {
    font-size: 16px;
    font-weight: bold;
    a {
      text-decoration: none;
    }
  }
  h2 {
    font-size: 12px;
    font-weight: normal;
  }

  .header-nav-li {
    margin-left: auto;
    ul {
      display: flex;
      align-items: center;
    }
    li {
      font-size: 14px;
      font-weight: bold;
      margin-left: 24px;
      cursor: pointer;
    }
  }
}
</style>
