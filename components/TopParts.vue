<template>
  <div>
    <img
      v-for="(image, index) in images"
      :key="index"
      :src="image.src"
      :style="image.style"
      class="img"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({})
export default class TopParts extends Vue {
  images: any[] = [
    {
      src: require('@/assets/images/img_tree.png'),
      style: {
        height: '200px',
        left: '250px',
        top: '150px',
      },
    },
    {
      src: require('@/assets/images/img_tree.png'),
      style: {
        height: '250px',
        left: '100px',
        top: '100px',
      },
    },
    {
      src: require('@/assets/images/img_tree.png'),
      style: {
        height: '300px',
        left: '150px',
        top: '200px',
      },
    },
    {
      src: require('@/assets/images/img_frog.png'),
      style: {
        height: '70px',
        left: '700px',
        top: '400px',
      },
    },
  ]
}
</script>

<style scoped lang="scss">
.img {
  position: absolute;
  pointer-events: none;
}
</style>
