<template>
  <div>
    <div class="home-intro" id="home">
      <div class="container">
        <div class="home-intro__row">
          <div class="home-intro__column">
            <div class="main-content">
              <h1 class="main-content__heading">
                PARTICIPATE IN <br />
                FIRSTANTIAGING TOKEN
              </h1>
              <p class="main-content__description">
                Revolutionary digital money system. Fast & most populer currency
                for your future online business.
              </p>
              <button class="btn main-content__btn">Try Now</button>
            </div>
          </div>
          <div class="home-intro__column">
            <img
              class="bitcoin"
              src="@/assets/images/hero-section-illus.png"
              alt="main-bg"
            />
          </div>
        </div>
      </div>
    </div>
    <track-ai-health id="crowdsale" />
    <longevity-scientific />
    <mobile-application-access />
    <tokenomics id="tokenomics" />
    <about-us id="about-us" />
    <faq />
    <team />
    <get-in-touch />
  </div>
</template>
<script>
import AboutUs from "../../components/parts/about-us.vue";
import LongevityScientific from "../../components/parts/longevity-scientific.vue";
import MobileApplicationAccess from "../../components/parts/mobile-application-access.vue";
import trackAiHealth from "../../components/parts/track-ai-health.vue";
import Tokenomics from "../../components/parts/tokenomics.vue";
import Faq from "../../components/parts/faq.vue";
import Team from "../../components/parts/team.vue";
import GetInTouch from "../../components/parts/get-in-touch.vue";
export default {
  components: {
    trackAiHealth,
    LongevityScientific,
    MobileApplicationAccess,
    Tokenomics,
    AboutUs,
    Faq,
    Team,
    GetInTouch,
  },
};
</script>

<style lang="scss">
.home-intro {
  position: relative;
  background-image: url("~@/assets/images/hero-section-bg.png");
  background-position: center top;
  background-repeat: no-repeat;
  min-height: rem(1200px);
  &__row {
    @include row-flex();
    min-height: rem(1200px);
    padding-top: rem(360px);
  }
  &__column {
    @include col();
    @include size(6);
  }
  .main-content {
    &__heading {
      font-size: rem(65px);
      text-transform: uppercase;
      margin-bottom: rem(64px);
      text-align: left;
    }
    &__description {
      font-size: rem(22px);
      margin-bottom: rem(60px);
      text-align: left;
    }
    &__btn {
      display: inline-block;
      background: transparent linear-gradient(90deg, #00d1de 0%, #00a2ff 100%)
        0% 0% no-repeat padding-box;
      box-shadow: 0px rem(3px) rem(9px) #00000059;
      border-radius: rem(4px);
      opacity: 1;
      margin-left: rem(360px);
      color: #fff;
    }
  }
}
.default-block-content {
  text-align: left;
  &__heading {
    font-size: rem(48px);
    line-height: rem(70px);
    color: $tx-dark;
    margin-bottom: rem(10px);
  }
  &__description {
    line-height: 32px;
    color: $tx-dark-blue;
    font-size: rem(18px);
  }
  &__learn-more {
    font-size: rem(22px);
    line-height: rem(55px);
  }
}
</style>
