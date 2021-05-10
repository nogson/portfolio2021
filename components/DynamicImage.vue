<template>
  <div>
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
  },

  computed: {
    dynamicImage() {
      return require(`~/content/${this.path}`)
    },
  },
}
</script>
<style scoped>
img {
  margin: 24px 0;
}
</style>
