<template>
  <div
    ref="card"
    class="item"
    :style="cardStyle"
    :class="{ drag: isDrag }"
    :data-test="item.slug"
    @mouseover="mouseover"
    @mouseout="mouseout"
  >
    <div ref="cardInner">
      <span class="shadow" :class="{ hover: isHover }" />
      <dl ref="card" class="card" :class="{ hover: isHover }">
        <dt @click="showDetail">
          <dynamic-image
            v-if="item.thumbnail"
            :path="item.thumbnail"
            :alt="item.title"
            margin="0 0 0 0"
          ></dynamic-image>
        </dt>
        <dd @click="showDetail">
          <h3 class="title">{{ item.title }}</h3>
          <p class="description">{{ item.description }}</p>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import DynamicImage from '~/components/DynamicImage.vue'

@Component({
  components: { DynamicImage },
})
export default class Card extends Vue {
  isHover: Boolean = false

  @Prop({ type: Object })
  item!: any

  @Prop({ type: Object })
  cardStyle!: { top: string; left: string }

  @Prop({ type: Boolean })
  isDrag: Boolean = false

  @Prop({ type: Number })
  translateX!: Number

  @Prop({ type: Number })
  translateY!: Number

  mouseover() {
    this.isHover = true
  }

  mouseout() {
    this.isHover = false
  }

  showDetail() {
    this.$router.push({
      path: '/',
      query: {
        translateX: String(this.translateX),
        translateY: String(this.translateY),
      },
    })
    const timeline = this.$gsap.timeline({
      defaults: { ease: 'Power1.easeOut' },
    })
    timeline
      .to(this.$refs.card, {
        scale: 7,
        zIndex: 100,
        duration: 0.5,
        background: '#fff',
      })
      .to(this.$refs.cardInner, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          this.$router.push(this.item.path)
        },
      })
  }
}
</script>

<style scoped lang="scss">
.item {
  cursor: pointer;
  //position: absolute;
  position: relative;
  transform: scale(1);
  width: 300px;
  height: 300px;
  margin: 50px;
  z-index: 100;

  &.drag {
    pointer-events: none;
  }
}
.card {
  user-select: none;
  transform-style: preserve-3d;
  transform: rotateX(60deg) rotateZ(45deg) skew(45deg);
  width: 300px;
  height: 300px;
  padding: 8px;
  border: 2px solid $color-gray-light1;
  background: #fff;

  &.hover {
    animation-name: hover;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-out;
  }

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
  background: rgba(#000, 0.5);
  width: 300px;
  height: 100px;
  transform: rotateX(-60deg) rotateZ(45deg);
  filter: blur(3px);

  &.hover {
    animation-name: shadowAnimation;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-out;
  }
}

@keyframes hover {
  0% {
    transform: rotateX(60deg) rotateZ(45deg) skew(45deg);
  }
  100% {
    transform: rotateX(0deg) rotateZ(0deg) skew(0deg) scale(0.85);
  }
}

@keyframes shadowAnimation {
  0% {
    transform: rotateX(-60deg) rotateZ(45deg);
    left: 40px;
    bottom: 15px;
    background: rgba(#000, 0.7);
  }
  100% {
    transform: rotateX(0deg) rotateZ(0deg) scale(0.85);
    left: 0px;
    bottom: 15px;
    background: rgba(#000, 0.1);
  }
}
</style>
