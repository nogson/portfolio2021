<template>
  <section class="about">
    <h1 class="title-main margin-b-l">About</h1>
    <div>
      <h2>
        <img class="my-icon" src="~/assets/images/myIcon.svg" />
        <span>Fumihiko Sato</span>
        <span class="description">Designer / Frontend Developer</span>
      </h2>
      <article class="margin-b-xl">
        <h3 class="title_m margin-b-m">Profile</h3>
        <div class="profile">
          <p>主にデザインとフロントエンド開発をやっています。</p>
          <p>
            どちらかと言えばデザイナーが、少しプログラムを書くような感じです。<br />
            ただし、デザインも独学なのでツールをなんとか使いこなすレベルなのでデザイナーでもないかもしれません。
          </p>
          <p>
            田舎から「デザイナー」という言葉に憧れて東京に出てきましたが、そんな想いは簡単に打ち砕かれ、
            日々怒られながらすごく中年の汚いおじさんです。
          </p>
        </div>
      </article>

      <article class="margin-b-xl">
        <h3 class="title_m margin-b-m">Skills</h3>
        <div class="skills">
          <dl>
            <dt>デザイン</dt>
            <dd>
              <p>
                グラフィックデザイン、Web、UIデザインができます。<br />
                ツールは、Figma、Sketch、XD、illustrator、Photoshop
                <br />UXリサーチの経験もありますが豊富ではありません。
                <br />イラストも頼まれれば描きますがあまり得意ではありません。
              </p>
              <p>好きなツールはFigmaです。</p>
            </dd>
          </dl>
          <dl>
            <dt>フロントエンド</dt>
            <dd>
              <p>
                HTML、CSS、Javascriptの経験はそこそこあります。最近はVueやNuxtを利用することが多いのでjQueryとかは忘れかけています。<br />
                wordpressはあまり好きではないです。
              </p>
            </dd>
          </dl>
          <dl>
            <dt>バックエンド</dt>
            <dd>
              <p>実務での経験値はほとんどないです。</p>
              <p>
                個人的にPHPを勉強中です。フレームワークはLaravelを利用しています。
              </p>
            </dd>
          </dl>
          <dl>
            <dt>インフラ</dt>
            <dd>
              <p>実務での経験値はほとんどないです。</p>
              <p>
                AWSを勉強中です。S3とCloudFrontを利用したHTTPSでの静的サイトのホスティングくらいならなんとかできます。<br />
                EC2を複数のAZ構成で、冗長化するとかもなんとかできます。<br />
                今はECSなどコンテナを利用した環境構築を勉強中です。
              </p>
            </dd>
          </dl>
          <dl>
            <dt>その他</dt>
            <dd>
              <p>TouchDesignerとBlenderが好きです(得意ではないです)。</p>
            </dd>
          </dl>
        </div>
      </article>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  components: {},
})
export default class About extends Vue {}
</script>

<style scoped lang="scss">
h2 {
  margin-bottom: 56px;
  span {
    display: block;
    text-align: center;
  }
  .description {
    font-size: 12px;
    font-weight: normal;
  }
}

.my-icon {
  width: 60px;
  margin: 0 auto 16px;
}
h3 {
  span {
    font-weight: normal;
    margin-left: 16px;
    font-size: 14px;
    color: $color-gray-dark2;
  }
}
.profile {
  padding: 24px;
  backdrop-filter: blur(3px);
  box-shadow: 0px 0px 5px rgba(#000, 0.2);
  p:not(:last-child) {
    margin-bottom: 16px;
  }
}
.skills {
  dl {
    display: flex;
    margin-bottom: 32px;
    dt {
      font-weight: bold;
      width: 150px;
    }
    dd {
      flex: 1;
      font-size: 14px;
      backdrop-filter: blur(3px);
      box-shadow: 0px 0px 5px rgba(#000, 0.2);
      padding: 24px;
      p:not(:last-child) {
        margin-bottom: 16px;
      }
    }
  }
}
</style>
