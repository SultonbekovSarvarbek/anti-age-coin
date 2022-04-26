<template>
  <header class="header" :class="{ header_active: scrollPosition > 100 }">
    <div class="header-wrapper container">
      <div class="header-logo">
        <a href="#" class="logo">
          <img
            class="logo__img"
            src="@/assets/images/logo/logo.png"
            alt="logo"
          />
        </a>
      </div>
      <div class="header-nav">
        <ul class="nav-list">
          <li class="nav-list__item">
            <a href="#home">Home</a>
          </li>
          <li class="nav-list__item">
            <a href="#crowdsale">Crowdsale</a>
          </li>
          <li class="nav-list__item">
            <a href="#tokenomics">Tokenomics</a>
          </li>
          <li class="nav-list__item">
            <a href="#about-us">About us</a>
          </li>
          <li class="nav-list__item">
            <a href="#contacts">Contact</a>
          </li>
          <button class="nav-list__item highlight-item">Donate</button>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      scrollPosition: null,
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
};
</script>

<style lang="scss">
.header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 9;
  padding-top: rem(45px);
  transition: all ease-out 0.3s;
  &_active {
    background: $tx-dark;
    color: #fff;
    padding: rem(15px) 0;
  }
  &-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: transparent;
  }
  &-nav {
    .nav-list {
      display: flex;
      align-items: center;
      gap: rem(50px);
    }
    .nav-list .nav-list__item {
      font-size: rem(20px);
    }
    .highlight-item {
      box-shadow: inset 3px 3px 6px #00000080;
      border: 2px solid #fffefe;
      border-radius: rem(20px);
      padding: rem(9px) rem(35px);
      color: #fff;
    }
  }
  .logo .logo__img {
    height: 113px;
  }
}
.header_active .logo .logo__img {
  height: 80px;
}
</style>
