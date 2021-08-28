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
    useBorder: {
      type: Boolean,
      default: true,
    }
  },

  computed: {
    dynamicImage() {
      return require(`~/content/${this.path}`)
    },
    imgStyle() {
      const style = {
        width: this.width,
      }
      if (this.margin) {
        style.margin = this.margin
      }
      if (!this.useBorder) {
        style.border = 'none'
      }

      return style
    },
  },
}
</script>
<style scoped lang="scss">
img {
  margin: 24px auto;
  border: 1px solid $color-gray-light1;
}
</style>
