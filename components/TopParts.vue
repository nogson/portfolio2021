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
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class TopParts extends Vue {
  images: any[] = [
    {
      src: require('@/assets/images/img_frog.png'),
      style: {
        height: '50px',
        left: '300px',
        top: '600px',
      },
    },
    {
      src: require('@/assets/images/img_parts_01.png'),
      style: {
        height: '200px',
        left: '100px',
        top: '700px',
      },
    },
    {
      src: require('@/assets/images/img_parts_02.png'),
      style: {
        height: '300px',
        left: '0px',
        top: '300px',
      },
    },
    {
      src: require('@/assets/images/img_parts_02.png'),
      style: {
        height: '300px',
        left: '1350px',
        top: '000px',
      },
    },
    {
      src: require('@/assets/images/img_parts_03.png'),
      style: {
        height: '100px',
        left: '200px',
        top: '900px',
      },
    },
    {
      src: require('@/assets/images/img_parts_04.png'),
      style: {
        height: '200px',
        left: '700px',
        top: '500px',
      },
    },
    {
      src: require('@/assets/images/img_parts_05.png'),
      style: {
        height: '200px',
        left: '800px',
        top: '900px',
      },
    },
    {
      src: require('@/assets/images/img_parts_06.png'),
      style: {
        height: '450px',
        left: '1050px',
        top: '400px',
      },
    },
    {
      src: require('@/assets/images/img_parts_07_1.png'),
      style: {
        height: '150px',
        left: '1000px',
        top: '100px',
      },
    },
    {
      src: require('@/assets/images/img_parts_07_2.png'),
      style: {
        height: '150px',
        left: '1100px',
        top: '50px',
      },
    },
    {
      src: require('@/assets/images/img_parts_07_3.png'),
      style: {
        height: '100px',
        left: '1250px',
        top: '150px',
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
