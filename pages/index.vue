<template>
  <div class="articles">
    <div style="position: relative">
      <span class="center"></span>
      <scroll-items />
      <span class="side-text-1"
        >PORTFOLIO<span class="side-text-line"></span
      ></span>
    </div>
    <div style="position: relative">
      <scroll-items />
      <span class="side-text-2">NOTE<span class="side-text-line"></span
      ></span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ScrollItems from '~/components/ScrollItems.vue'

@Component({
  components: { ScrollItems },
  async asyncData({ $content, params }) {},
})
export default class Index extends Vue {}
</script>

<style scoped lang="scss">
.articles {
  display: flex;
  height: 100%;

  > * {
    margin-right: 24px;
  }
}

.side-text-1,
.side-text-2 {
  position: absolute;
  font-weight: bold;
  color: $color-gray-thin1;
  font-size: 30px;
  display: flex;
  align-items: center;
  .side-text-line {
    margin-left: 8px;
    width: 100px;
    height: 1px;
    display: block;
    background: $color-gray-thin1;
  }
}

.side-text-1 {
  bottom: 130px;
  left: -190px;
  transform: rotate(-90deg);
}

.side-text-2 {
  top: 80px;
  right: -130px;
  transform: rotate(90deg);
}
.center {
  position: absolute;
  top: 435.5px;
  left: 0;
  width: 100px;
  height: 1px;
  background: red;
}
</style>
