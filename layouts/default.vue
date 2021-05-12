<template>
  <section class="container">
    <div class="side-nav">
      <div class="side-nav-fix">
        <h1><nuxt-link to="/">Satofaction.net</nuxt-link></h1>
        <h2>Designer /<br />Frontend Developer</h2>
        <nav class="side-nav-li">
          <ul>
            <li><nuxt-link to="/">Top</nuxt-link></li>
            <li><nuxt-link to="/about">About</nuxt-link></li>
            <li><nuxt-link to="/">Contact</nuxt-link></li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="main">
      <Nuxt />
    </div>
    <div class="sub-nav"></div>
  </section>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  max-width: 1152px;
  margin: 0 auto;
  padding: 48px 0;
  min-height: 100vh;
}
.side-nav {
  flex: 1;
  max-width: 164px;
  padding-left: 16px;

  .side-nav-fix {
    position: fixed;
  }

  h1 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 8px;
    a {
      text-decoration: none;
    }
  }
  h2 {
    font-size: 12px;
    font-weight: normal;
  }

  .side-nav-li {
    margin-top: 40px;
    li {
      color: $color-black;
      font-size: 14px;
      margin-bottom: 8px;
      font-weight: bold;
    }
  }
}
.main {
  flex: 4;
  padding: 0 24px;
}
.sub-nav {
  flex: 1;
  max-width: 164px;
}
</style>
