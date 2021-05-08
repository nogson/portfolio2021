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
        <div class="profile font-kiwi-maru">
          <p>学生時代は何もやりたいことがなく怠惰に過ごす。</p>
          <p>
            とにかく横文字の仕事に就きたいと、なんとなくカッコ良さそうな「グラフィックデザイナー」を目指す。
          </p>
          <p>
            運良く地元印刷会社拾ってもらうが、ド素人なので何もできず、同僚からは「何もできないね」とピュアな感想を言われる。
          </p>
          <p>
            矢沢永吉の「成り上がり」に影響され、東京に行けばビッグなデザイナーになれるだろうと思い上京する。
          </p>
          <p>
            ビッグなデザイナーになれるはずもなく、東京の片隅でデザインのような仕事をする。
          </p>
          <p>Flashを知り感動し、Webに興味を持つ。</p>
          <p>
            1年間フリーランスという名の、フリーター生活をしてWebの勉強をする。
          </p>
          <p>
            運良くFlashが得意な制作会社に拾ってもらうが、入社後すぐにFlashが亡くなり絶望する。
          </p>
          <p>
            Webのド素人なので何もできず、同僚からは「何ができるの？」とピュアな質問をされる。
          </p>
          <p>
            現在は日々怒られながらも、なんとかWeb業界の片隅で仕事を続ける。<br />
            そんな私は、中年の汚いおじさんです。
          </p>
        </div>
      </article>

      <article class="margin-b-xl">
        <h3 class="title_m margin-b-m">Skills</h3>
        <div class="skills">
          <dl>
            <dt>デザイン</dt>
            <dd class="font-kiwi-maru">
              <p>
                グラフィックデザイン、Web、UIデザインができます。
                <br />UXリサーチの経験もありますが豊富ではありません。
                <br />イラストも頼まれれば描きますがあまり得意ではありません。
              </p>
              <p>好きなツールはFigmaです。</p>
            </dd>
          </dl>
          <dl>
            <dt>フロントエンド</dt>
            <dd class="font-kiwi-maru">
              <p>
                HTML、CSS、Javascriptの経験はそこそこあります。最近はVueやNuxtを利用することが多いのでjQueryとかは忘れかけています。<br />
                wordpressはあまり好きではないです。
              </p>
            </dd>
          </dl>
          <dl>
            <dt>バックエンド</dt>
            <dd class="font-kiwi-maru">
              <p>実務での経験値はほとんどないです。</p>
              <p>
                個人的にPHPを勉強中です。フレームワークはLaravelを利用しています。
              </p>
            </dd>
          </dl>
          <dl>
            <dt>インフラ</dt>
            <dd class="font-kiwi-maru">
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
            <dd class="font-kiwi-maru">
              <p>TouchDesignerとBlenderが好きです。</p>
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
export default class Index extends Vue {}
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
  border: solid 2px $color-black;
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  padding: 24px;
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
      border: solid 2px $color-black;
      border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
      padding: 24px;
      p:not(:last-child) {
        margin-bottom: 16px;
      }
    }
  }
}
</style>
