<template>
  <section class="tokenomics">
    <div class="container">
      <h1 class="tokenomics__heading">Tokenomics</h1>
      <div class="tokenomics__column">
        <div class="tokenomics__item tokenomics-top">
          <img
            class="tokenomics__item-image"
            src="@/assets/images/tokenomics-1.png"
            alt="tokenomic-img"
          />
          <div class="tokenomics-item-content">
            <p class="tokenomics-item-content__top-text">
              Authentic, Trustable and Secure
            </p>
            <p class="tokenomics-item-content__description">
              Deployed on the Binance Smart Chain. 1 trillion supply Launchpad
              offer size of $2 million (1B tokens)
            </p>
          </div>
        </div>
        <div class="tokenomics__item tokenomics-center">
          <img
            class="tokenomics__item-image"
            src="@/assets/images/tokenomics-2.png"
            alt="tokenomic-img"
          />
          <div class="tokenomics-item-content">
            <p class="tokenomics-item-content__top-text">
              Token that cares about your health
            </p>
            <p class="tokenomics-item-content__description">
              The power to influence your health and extend your lifespan is in
              your hands 1 Private and 3 Public rounds
            </p>
          </div>
        </div>
        <div class="tokenomics__item tokenomics-bottom">
          <img
            class="tokenomics__item-image"
            src="@/assets/images/tokenomics-3.png"
            alt="tokenomic-img"
          />
          <div class="tokenomics-item-content">
            <p class="tokenomics-item-content__top-text">
              Access Longevity Marketspace
            </p>
            <p class="tokenomics-item-content__description">
              Avail exclusive services and perks on our Mobile Applications
              using the LONG token
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TokenomicsPage",
};
</script>

<style lang="scss">
.tokenomics {
  color: $tx-full-black;
  margin-top: rem(88px);
  scroll-margin-top: rem(200px);
  &__heading {
    font-family: Montserrat-Bold;
    font-size: rem(60px);
    line-height: rem(72px);
    text-align: right;
    margin-right: rem(200px);
  }
  &__item {
    @include row-flex();
    @include col();
    @include size(7);
    flex-wrap: nowrap;
    align-items: center;
    gap: rem(23px);
  }
  &-item-content {
    text-align: left;
  }
  &-center {
    margin-left: auto;
  }
  &__column {
    display: grid;
    gap: rem(20px);
  }
}
.tokenomics-item-content {
  font-size: rem(20px);
  line-height: rem(27px);
  font-family: SegoeUI-Regular;
  &__description,
  &__top-text {
    font-family: inherit;
  }
  &__top-text {
    margin-bottom: rem(25px);
  }
}
</style>
