<template>
  <div class="content-list-menu-wrap">
    <transition name="fade">
      <div
        v-if="!isShowContentListWrap"
        class="menu-button"
        @click="toggleContentList"
      >
        <img src="~/assets/images/icon/list-solid.svg" />
      </div>
    </transition>
    <transition name="fade">
      <div
        v-if="isShowContentListWrap"
        ref="contentListWrap"
        class="content-list-wrap"
      >
        <ul>
          <li v-for="item in portfolio">
            {{ item.title }}
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { gsap } from 'gsap'

@Component({})
export default class ContentListMenu extends Vue {
  isShowContentListWrap: boolean = false

  @Prop({ type: Array })
  note!: any[]

  @Prop({ type: Array })
  portfolio!: any[]

  toggleContentList() {
    this.isShowContentListWrap = !this.isShowContentListWrap
    // gsap.fromTo(
    //   this.$refs.contentListWrap,
    //   {
    //     opacity: 0,
    //   },
    //   {
    //     duration: 1,
    //     opacity: 1,
    //   }
    // )
  }
}
</script>

<style scoped lang="scss">
.content-list-menu {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
}

.menu-button {
  width: 44px;
  padding: 12px;
  box-sizing: border-box;
  position: absolute;
  top: calc(50% - 22px);
  right: 0;
  color: #fff;
  background: rgba(#000, 0.9);
  cursor: pointer;
}

.content-list-wrap {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(#000, 0.9);
  overflow: scroll;
  padding: 32px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
