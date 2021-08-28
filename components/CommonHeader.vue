<template>
  <div :class="`header-nav ${type}`">
    <logo :type="type" />
    <div class="header-nav-button" @click="toggleNav">
      <hamburger-menu :active="isOpen" />
    </div>

    <nav ref="headerNavList" class="header-nav-li" :class="{ open: isOpen }">
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
import { gsap } from 'gsap'
import HamburgerMenu from '~/components/HamburgerMenu.vue'
import Logo from '~/components/Logo.vue'

@Component({
  components: { Logo, HamburgerMenu },
})
export default class CommonHeader extends Vue {
  isOpen: Boolean = false

  @Prop({ type: String })
  type!: String

  changeType(type: string) {
    this.$router.push({ path: '/', query: { type } })
    this.isOpen = false
  }

  toggleNav() {
    if (!this.isOpen) {
      this.isOpen = true
      gsap.to(this.$refs.headerNavList, {
        opacity: 1,
        duration: 0.25,
      })
    } else {
      gsap.to(this.$refs.headerNavList, {
        opacity: 0,
        duration: 0.25,
        onComplete: () => {
          this.isOpen = false
        },
      })
    }
  }
}
</script>

<style scoped lang="scss">
.top {
  .header-nav {
    position: fixed;
    background: none;
    box-shadow: none;

    a,
    a:link,
    li {
      color: $color-gray-dark4;
    }
  }
}
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
    @include sm() {
      display: none;
      opacity: 0;
      &.open {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: rgba(#fff, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        ul {
          display: block;
        }

        li {
          margin-left: 0;
          font-size: 18px;
          &:not(:last-child) {
            margin-bottom: 16px;
          }
        }
      }
    }
  }

  .header-nav-button {
    display: none;
    @include sm() {
      position: absolute;
      z-index: 10;
      top: 16px;
      right: 24px;
      display: block;
      border: none;
      background: none;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      i {
        font-size: 24px;
        line-height: 1;
      }
    }
  }
}
</style>
