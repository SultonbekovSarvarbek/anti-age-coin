<template>
  <div class="mobile-application-access">
    <div class="container">
      <div class="mobile-application-access__row">
        <div class="mobile-application-access__column phones">
          <img class="phone-left" src="@/assets/images/app.png" alt="app" />
          <img
            class="phone-right"
            src="@/assets/images/app-2.png"
            alt="app-2"
          />
        </div>
        <div class="mobile-application-access__column">
          <div class="mobile-application-content">
            <span class="mobile-application__top-text"
              >DON’T MISS OUR APPS</span
            >
            <h1 class="mobile-application__heading">
              Mobile Application for Faster Access.
            </h1>
            <p class="mobile-application__infpo">
              Now you can control dashboard from the mobile!
            </p>
            <p class="mobile-application__description">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero
            </p>
            <div class="actions">
              <button class="btn apple-store">Apple Store</button>
              <button class="btn play-market">
                <span>
                  <img
                    src="@/assets/images/icons/google-play.png"
                    alt="google-play-icon"
                  />
                </span>

                Google Play
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.mobile-application-access {
  color: $tx-dark;
  margin-top: rem(300px);
  background: #610bcf;
  padding: rem(50px) 0;
  &__row {
    @include row-flex();
    align-items: center;
  }
  &__column {
    @include col();
    @include size(6);
  }
  .phone-left {
    position: relative;
    top: rem(-250px);
  }
  .phones {
    display: flex;
    justify-content: space-between;
  }
}
.mobile-application {
  &-content {
    text-align: left;
    color: #fff;
    .actions {
      display: flex;
      gap: rem(10px);
      .btn {
        box-shadow: none;
      }
      .apple-store {
        background: #fff;
        color: $tx-black;
      }
      .play-market {
        background: transparent;
        border: rem(2px) solid #fff;
        display: flex;
        align-items: center;
        gap: rem(15px);
      }
    }
  }
  &__top-text {
    font-family: FuturaPT-Demi;
    font-size: 1rem;
    margin-bottom: rem(15px);
    display: inline-block;
  }
  &__heading {
    font-size: rem(45px);
    line-height: rem(60px);
    margin-bottom: rem(27px);
  }
  &__info {
    font-family: FuturaPT-Demi;
    font-size: rem(21px);
    margin-bottom: rem(23px);
  }
  &__description {
    font-size: rem(18px);
    line-height: rem(32px);
    margin-bottom: rem(45px);
    font-family: ProximaNova-Regular;
  }
}
</style>
