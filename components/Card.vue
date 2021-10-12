<template>
  <div ref="card" class="card padding-all" :class="klass">
    <div class="card-info">
      <dl class="title">
        <dt>{{ index }}</dt>
        <dd>
          <nuxt-link :to="item.path">{{ item.title }}</nuxt-link>
        </dd>
      </dl>
      <p v-if="item.createdAt" class="date">
        <span class="type">{{ type(item) }}</span
        >{{ formatDateToString(item.createdAt) }}
      </p>
      <p class="description">{{ item.description }}</p>
    </div>
    <div class="card-img">
      <nuxt-link :to="item.path">
        <dynamic-image
          class="img"
          :path="item.thumbnail"
          :alt="item.title"
          margin="0 0 0 0"
        />
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import moment from 'moment'
import DynamicImage from '~/components/DynamicImage.vue'
import { IContentItem } from '~/interface/IContent'

@Component({
  components: { DynamicImage },
})
export default class Card extends Vue {
  style: object | null = null

  @Prop({ type: Object })
  item!: IContentItem

  @Prop({ type: String })
  index!: string

  @Prop({ type: String })
  klass!: string

  formatDateToString(date: string): string {
    return moment(date).format('YYYY年MM月DD日')
  }

  get type() {
    return (item: IContentItem): string => {
      return item.dir === '/blog' ? 'BLOG' : 'PORTFOLIO'
    }
  }
}
</script>

<style scoped lang="scss">
.card {
  background: $color-background;

  @include sm() {
    &:not(:last-child) {
      border-bottom: 4px solid $color-black;
    }
  }

  .card-info {
    padding-right: 16px;
    flex: 1;
  }

  .card-img {
    width: 150px;
  }
  .title {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    line-height: 1.4;
    dt {
      font-size: 36px;
      font-weight: bold;
      font-family: Helvetica;
      padding-right: 16px;
      margin-right: 16px;
      border-right: $common-margin solid $color-black;
      line-height: 1.2;
    }
    dd {
      font-size: 18px;
      font-weight: bold;
    }
  }

  .description {
    font-size: 12px;
  }

  .date {
    font-size: 12px;
    color: $color-gray-dark3;
    margin-bottom: 8px;
    .type {
      color: $color-black;
      border: 1px solid $color-black;
      padding: 2px 4px;
      margin-right: 8px;
      font-size: 10px;
      font-weight: bold;
    }
  }
}

.card-0 {
  grid-row: 1; // 縦
  grid-column: 1 / span 3; // 横
}

.card-1 {
  grid-row: 1; // 縦
  grid-column: 4 / span 3; // 横
}

.card-2 {
  grid-row: 2; // 縦
  grid-column: 1 / span 2; // 横
}

.card-3 {
  grid-row: 2; // 縦
  grid-column: 3 / span 2; // 横
}

.card-4 {
  grid-row: 2; // 縦
  grid-column: 5 / span 2; // 横
}

.card-5 {
  grid-row: 3 / span 3; // 縦
  grid-column: 1; // 横
}

.card-6 {
  grid-row: 3; // 縦
  grid-column: 2 / span 2; // 横
}

.card-7 {
  grid-row: 4; // 縦
  grid-column: 2 / span 2; // 横
}

.card-8 {
  grid-row: 5; // 縦
  grid-column: 2 / span 2; // 横
}

.card-9 {
  grid-row: 3 / span 3; // 縦
  grid-column: 4 / span 3; // 横
}

.card-0,
.card-1 {
  @include more_md() {
    display: flex;
    align-items: center;
    width: 100%;
    .card-img {
      margin-left: auto;
    }
  }
}

.card-2,
.card-3,
.card-4 {
  @include more_md() {
    display: flex;
    flex-direction: column;
    .description {
      margin-bottom: 16px;
    }

    .card-info {
      padding-right: 0;
    }

    .card-img {
      height: 100%;
      margin: 0 auto;
      width: 100%;
      display: flex;
      align-items: center;
    }
  }
}

.card-5 {
  @include more_md() {
    .title {
      writing-mode: vertical-rl;
      margin-left: 16px;
      dt {
        padding: 0 0 16px 0;
        margin: 0 0 16px 0;
        border-bottom: $common-margin solid $color-black;
        border-right: none;
        text-combine-upright: all;
      }
      dd {
        height: 200px;
      }
    }

    .description,
    .date {
      writing-mode: vertical-rl;
    }
    .date {
      margin: 0 0 0 8px;
      .type {
        padding: 4px 2px;
        margin: 0 0 8px 0;
      }
    }
    .card-info {
      display: flex;
      flex-direction: row-reverse;
    }
  }
  .card-img {
    margin-top: 24px;
  }
}

.card-6,
.card-7,
.card-8 {
  @include more_md() {
    .title {
      dt {
        font-size: 22px;
      }

      dd {
        font-size: 14px;
      }
    }
    .card-img {
      display: none;
    }
  }
}

.card-9 {
  .description {
    margin-bottom: 16px;
  }
  .card-img {
    width: 100%;
  }
}

@include sm() {
  [class^='card-'] {
    display: block;
    .description {
      margin-bottom: 16px;
    }
    .card-img {
      display: block;
      width: 100%;
    }
  }
}
</style>
