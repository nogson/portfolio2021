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
  },

  computed: {
    dynamicImage() {
      return require(`~/content/${this.path}`)
    },
    imgStyle() {
      if (this.margin) {
        return {
          margin: this.margin,
        }
      } else {
        return {}
      }
    },
  },
}
</script>
<style scoped>
img {
  margin: 24px 0;
}
</style>
