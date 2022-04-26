<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <div class="footer__row">
          <div class="footer__column">
            <h3 class="footer__column-heading">AntiAgingCoin</h3>
            <span class="footer__column-subheading"
              >AntiAgingcoin@company.com</span
            >
            <div class="footer__column-text">
              Longevity InTime is a several verticals project, including AI
              Longevity tracking technology, variety of B2B AI algorithms for
              medical institutions, Longevity Scientific Resort, Longevity
              Petition initiative & etc. The scientific vertical initiates,
              organizes, and guarantees openness of clinical trials of anti
              aging therapies.
            </div>
          </div>
          <div class="footer__column">
            <h3 class="footer__column-heading">Quick Links</h3>
            <ul class="links-list">
              <li><a class="link" href="#home">Home</a></li>
              <li><a class="link" href="#crowdsale">Apps</a></li>
              <li><a class="link" href="#tokenomics">Tokenomics</a></li>
              <li><a class="link" href="#about-us">About us</a></li>
            </ul>
          </div>
          <div class="footer__column">
            <h3 class="footer__column-heading">Our Product</h3>
            <ul class="links-list">
              <li><a class="link" href="#">BMI Disease Tracker</a></li>
              <li><a class="link" href="#">AI Health Check Up</a></li>
              <li><a class="link" href="#">Longevity Scientific Resort</a></li>
            </ul>
          </div>
          <div class="footer__column">
            <h3 class="footer__column-heading">Contact Us</h3>
            <ul class="links-list">
              <li>
                <a class="link" href="#"
                  >Wilmington, Delaware 19801, US <br />United States</a
                >
              </li>
              <li>
                <a class="link" href="#"
                  >Phone: +79852287192 <br />Email: support@intime.digital</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p class="footer-bottom__copyright">
            &copy; {{ currentYear }} AntiAgingCoin All Right Reserved
          </p>
          <div class="footer-bottom__social-links">
            <a class="facebook" href="#">
              <img
                src="@/assets/images/social-icons/facebook.svg"
                alt="facebook"
                class="facebook-icon"
              />
            </a>
            <a class="instagram" href="#">
              <img
                src="@/assets/images/social-icons/instagram.svg"
                alt="instagram"
                class="instagram-icon"
              />
            </a>
            <a class="twitter" href="#">
              <img
                src="@/assets/images/social-icons/twitter.svg"
                alt="twitter"
                class="twitter-icon"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    <img
      class="left-element"
      src="@/assets/images/footer-element-left.png"
      alt="left-element"
    />
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style lang="scss">
.footer {
  background-image: url("~@/assets/images/footer-bg.png");
  background-position: center top;
  background-repeat: no-repeat;
  margin-top: rem(100px);
  min-height: rem(550px);
  color: #1a1a1a;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  &::before {
    content: "";
    display: block;
    position: absolute;
    right: rem(-219px);
    width: rem(438px);
    height: rem(438px);
    background: url("~@/assets/images/footer-element-right.png") 0 0 no-repeat;
    display: block;
    top: -60%;
    z-index: -1;
  }
  .left-element {
    position: absolute;
    left: -5%;
    width: rem(200px);
    bottom: 0;
  }
  &__row {
    @include row-flex();
    margin-bottom: rem(40px);
  }
  &__column {
    @include col();
    @include size(3);
    text-align: left;
  }
  &__column-heading {
    font-family: FuturaPT-Heavy;
    font-size: rem(22px);
    line-height: rem(58px);
    margin-bottom: rem(35px);
  }
  &__column-subheading {
    margin-bottom: rem(20px);
    display: block;
    font-size: 1rem;
    font-family: ProximaNova-Regular;
  }
  &__column-text {
    font-family: SegoeUI-Regular;
    line-height: rem(24px);
  }
  .links-list {
    color: #212121;
    opacity: 0.65;
    display: flex;
    flex-direction: column;
    gap: rem(20px);
    li a {
      font-size: rem(17px);
    }
  }
}
.footer .footer-bottom {
  padding: rem(30px) 0;
  border-top: 1px solid #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &__copyright {
    font-family: ProximaNova-Regular;
    font-size: rem(17px);
    line-height: rem(21px);
    color: #747474;
  }
  &__social-links {
    display: flex;
    align-items: center;
    gap: rem(8px);
  }
  &__social-links img {
    width: rem(34px);
    height: rem(34px);
  }
}
</style>
