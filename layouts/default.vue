<template>
  <div class="container">
    <div class="sidenav">
      <h1>Fumihiko Sato</h1>
      <h2>Designer / Frontend Developer</h2>
      <nav class="sidenav-li">
        <ul>
          <li><nuxt-link to="/">About</nuxt-link></li>
          <li><nuxt-link to="/">Contact</nuxt-link></li>
        </ul>
      </nav>
    </div>
    <div>
      <ul>
        <li>
          <dl class="article">
            <dt></dt>
            <dd>
              <h3>タイトルが入ります</h3>
              <p>
                なんか説明がはいります。なんか説明がはいります。なんか説明がはいります。
              </p>
            </dd>
          </dl>
        </li>
      </ul>
    </div>
    <div>
      <Nuxt />
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  > * {
    padding: 24px;
  }
}
.sidenav {
  h1 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 8px;
  }
  h2 {
    font-size: 12px;
    font-weight: normal;
  }

  .sidenav-li {
    margin-top: 40px;
    li {
      color: $color-black;
      font-size: 14px;
      margin-bottom: 8px;
      font-weight: bold;
    }
  }
}
</style>
