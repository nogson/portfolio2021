<template>
  <div class="img-wrapper" :style="imgStyle" :class="{ filter: useFilter }">
    <img :src="dynamicImage" :alt="alt" width="100%" />
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
    useFilter: {
      type: Boolean,
      default: false,
    },
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

      return style
    },
  },
}
</script>
<style scoped lang="scss">
.img-wrapper {
  margin: 24px auto;
}
.filter {
  background-color: $color-gray-dark3;
  display: flex;
  flex: 1 1 100%;
  height: 100%;
  overflow: hidden;
  padding: 0;
  position: relative;
}

.filter img {
  margin: 0 !important;
  filter: grayscale(100%) contrast(1);
  flex: 1 0 100%;
  height: 100%;
  max-width: 100%;
  mix-blend-mode: overlay;
  object-fit: cover;
  opacity: 1;
  position: relative;
  width: 100%;
}

.filter::before {
  background-color: $color-black;
  bottom: 0;
  content: '';
  height: 100%;
  left: 0;
  mix-blend-mode: overlay;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 1;
}
</style>
