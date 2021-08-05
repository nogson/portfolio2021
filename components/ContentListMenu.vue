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
        <nav class="nav">
          <ul>
            <li
              :class="{ act: displayContentType === 'portfolio' }"
              @click="changeContent('portfolio')"
            >
              Portfolio
            </li>
            <li
              :class="{ act: displayContentType === 'note' }"
              @click="changeContent('note')"
            >
              Blog
            </li>
            <li class="close-button" @click="toggleContentList"><i class="mdi mdi-close" /></li>
          </ul>
        </nav>
        <dl
          v-for="item in contents[displayContentType]"
          :key="item.slug"
          class="content-row"
          @click="showContent(item.path)"
        >
          <dt>{{ item.title }}</dt>
          <dd>{{ item.description }}</dd>
        </dl>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({})
export default class ContentListMenu extends Vue {
  isShowContentListWrap: boolean = false
  displayContentType: string = 'portfolio'

  @Prop({ type: Object })
  contents!: any

  toggleContentList() {
    this.isShowContentListWrap = !this.isShowContentListWrap
  }

  showContent(path: string) {
    this.$router.push(path)
  }

  changeContent(type: string) {
    this.displayContentType = type
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
  z-index: 200;
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

.nav {
  padding: 24px;
  ul {
    display: flex;
    li {
      margin-right: 24px;
      font-weight: bold;
      cursor: pointer;
      &.act {
        padding-bottom: 4px;
        border-bottom: 2px solid #fff;
      }
    }
    .close-button {
      margin-left: auto;
      font-size: 24px;
      width: 44px;
      height: 44px;
      line-height: 44px;
      text-align: center;
      cursor: pointer;
    }
  }
}

.content-list-wrap {
  position: absolute;
  z-index: 300;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(#000, 0.9);
  overflow: scroll;
  padding: 32px;
  color: #fff;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.content-row {
  margin-bottom: 24px;
  border-bottom: 1px solid rgba(#fff, 0.1);
  padding: 24px;
  cursor: pointer;

  dt {
    font-size: 20px;
    font-weight: bold;
    color: #fff;
  }

  dd {
    font-size: 14px;
    color: rgba(#fff, 0.5);
  }
}
</style>
