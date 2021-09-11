<template>
  <div ref="card" class="card padding-all">
    <!--    <div>-->
    <!--            <nuxt-link :to="item.path">-->
    <!--              <dynamic-image-->
    <!--                class="img"-->
    <!--                :path="item.thumbnail"-->
    <!--                :alt="item.title"-->
    <!--                :use-filter="true"-->
    <!--                margin="0 0 0 0"-->
    <!--              />-->
    <!--              <p class="created-at">-->
    <!--                <span :class="`item_type ${type(item)}`"></span>-->
    <!--                <span>-->
    <!--                  {{ formatDateToString(item.created_at) }}-->
    <!--                </span>-->
    <!--              </p>-->
    <!--              <p class="title">-->
    <!--                {{ item.title }}-->
    <!--              </p>-->
    <!--            </nuxt-link>-->
    <!--    </div>-->
    <div class="card-top">{{ type(item) }}</div>
    <div class="card-bottom">
      <p class="title">
        {{ item.title }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'nuxt-property-decorator'
import { gsap } from 'gsap'
import moment from 'moment'
import DynamicImage from '~/components/DynamicImage.vue'

@Component({
  components: { DynamicImage },
})
export default class Card extends Vue {
  style: object | null = null

  @Prop({ type: Object })
  item!: any

  @Prop({ type: Number })
  index!: number

  mounted() {}

  formatDateToString(date: string): string {
    return moment(date).format('YYYY/MM/DD')
  }

  get type() {
    return (item: any): string => {
      return item.dir === '/note' ? 'Blog' : 'Portfolio'
    }
  }
}
</script>

<style scoped lang="scss">
.card {
  background: $color-background;
  margin: $common-margin;
}
</style>
