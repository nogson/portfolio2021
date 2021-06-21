<template>
  <div>
    <img :src="dynamicImage" :alt="alt" width="100%" :style="imgStyle" />
  </div>
</template>

<script>
export default {
  name: 'DynamicImage',

  props: {
    path: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    margin: {
      type: String,
    },
    width: {
      type: String,
    },
  },

  computed: {
    dynamicImage() {
      return require(`~/content/${this.path}`)
    },
    imgStyle() {
      if (this.margin) {
        return {
          margin: this.margin,
          width: this.width,
        }
      } else {
        return {
          width: this.width,
        }
      }
    },
  },
}
</script>
<style scoped>
img {
  margin: 24px auto;
}
</style>
