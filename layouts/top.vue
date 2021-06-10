<template>
  <section class="container">
    <div class="header-nav">
      <h1><nuxt-link to="/">Satofaction.net</nuxt-link></h1>
      <nav class="header-nav-li">
        <ul>
          <li @click="changeType('portfolio')">Portfolio</li>
          <li @click="changeType('note')">Note</li>
          <li><nuxt-link to="/about">About</nuxt-link></li>
          <li><nuxt-link to="/">Contact</nuxt-link></li>
        </ul>
      </nav>

      <!--      <div class="sub-nav">-->
      <!--        <category :items="note" />-->
      <!--      </div>-->
    </div>
    <div class="main">
      <Nuxt />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Category from '~/components/Category.vue'

@Component({
  components: { Category },
})
export default class extends Vue {
  note: any[] = []
  created() {
    this.$nuxt.$on('updateContent', this.updateContent)
  }

  updateContent(data: any[]) {
    this.note = data
  }

  changeType(type) {
    this.$nuxt.$emit('changeType', type)
  }
}
</script>

<style scoped lang="scss">
.container {
  padding: 48px 0;
}
.header-nav {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  padding: 32px;
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;

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
      color: $color-black;
      font-size: 14px;
      font-weight: bold;
      margin-left: 24px;
      cursor: pointer;
    }
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
