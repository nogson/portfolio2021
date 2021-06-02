<template>
  <div>
    <card
      v-for="(item, index) in portfolio"
      :key="index"
      :item="item"
      :card-style="cardStyle(index)"
    />
  </div>
  <!--  <div class="articles">-->
  <!--    <div class="articles-wrap">-->
  <!--      <scroll-items :items="portfolio" type="portfolio" />-->
  <!--      <span class="side-text-1"-->
  <!--        >PORTFOLIO<span class="side-text-line"></span-->
  <!--      ></span>-->
  <!--    </div>-->
  <!--    <div class="articles-wrap">-->
  <!--      <scroll-items :items="note" type="note" />-->
  <!--      <span class="side-text-2">NOTE<span class="side-text-line"></span></span>-->
  <!--    </div>-->
  <!--  </div>-->
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ScrollItems from '~/components/ScrollItems.vue'
import Card from '~/components/Card.vue'

@Component({
  layout: 'top',
  components: { Card, ScrollItems },
  async asyncData({ $content, params }) {
    return {
      note: await $content('note').sortBy('create_at', 'desc').fetch(),
      portfolio: await $content('portfolio').sortBy('order', 'desc').fetch(),
    }
  },
})
export default class Index extends Vue {
  portfolio!: any[]
  note!: any[]
  head() {
    return {
      bodyAttrs: {
        class: 'top',
      },
    }
  }

  created() {
    this.$nuxt.$emit('updateContent', this.note)
    // console.log(this.$content('note').fetch())
  }

  get cardStyle() {
    return (i: number) => {
      return {
        top: 300 * Math.floor(i / 5) + 100 + 'px',
        left: 300 * (i % 5) + 'px',
      }
    }
  }
}
</script>

<style scoped lang="scss">
.articles {
  display: flex;
  height: 100%;

  .articles-wrap {
    position: relative;
    margin-right: 24px;
    flex: 1;
  }
}

.side-text-1,
.side-text-2 {
  position: absolute;
  font-weight: bold;
  color: $color-gray-light1;
  font-size: 30px;
  display: flex;
  align-items: center;
  .side-text-line {
    margin-left: 8px;
    width: 100px;
    height: 1px;
    display: block;
    background: $color-gray-light1;
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
</style>
