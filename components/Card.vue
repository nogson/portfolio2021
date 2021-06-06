<template>
  <div class="item" :style="cardStyle" @mouseenter="hover">
    <span class="shadow" />
    <dl class="card" ref="card">
      <dt>
        <router-link :to="item.path">
          <dynamic-image
            v-if="item.thumbnail"
            :path="item.thumbnail"
            :alt="item.title"
            margin="0 0 0 0"
          ></dynamic-image>
        </router-link>
      </dt>
      <dd>
        <router-link :to="item.path">
          <h3 class="title">{{ item.title }}</h3>
          <p class="description">{{ item.description }}</p>
        </router-link>
      </dd>
    </dl>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import DynamicImage from '~/components/DynamicImage.vue'

@Component({
  components: { DynamicImage },
})
export default class Card extends Vue {
  @Prop({ type: Object })
  item!: any

  @Prop({ type: Object })
  cardStyle!: { top: string; left: string }

  hover() {
    this.$gsap.to(this.$refs.card, {
      x: xValue,
      y: yValue,
      duration: 1.5,
    })
  }
}
</script>

<style scoped lang="scss">
.item {
  //position: absolute;
  position: relative;
  transform: scale(1);
  width: 300px;
  height: 300px;
  margin: 50px;
}
.card {
  user-select:none;
  transform-style: preserve-3d;
  transform: rotateX(-60deg) rotateZ(45deg) scale(1) skew(45deg);
  width: 300px;
  height: 300px;
  padding: 8px;
  border: 2px solid $color-gray-light1;
  background: #fff;
  dt {
    border: 1px solid $color-gray-light1;
    width: 100%;
    margin-bottom: 8px;
  }
  dd {
    .title {
      font-size: 14px;
      margin-bottom: 8px;
    }
    .description {
      font-size: 12px;
    }
  }
}

.shadow {
  position: absolute;
  left: 40px;
  bottom: 15px;
  display: block;
  background: rgba(#000, 0.7);
  width: 300px;
  height: 100px;
  transform: rotateX(-60deg) rotateZ(45deg);
  filter: blur(3px);
}
</style>
