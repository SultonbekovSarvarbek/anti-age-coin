<template>
  <div class="track-ai">
    <div class="container">
      <div class="track-ai__row">
        <div class="track-ai__column cards-wrapper">
          <div class="card">
            <img
              class="card__image"
              src="@/assets/images/ml-algorithm.png"
              alt="main-bg"
            />
            <h3 class="card__heading">Mobile App</h3>
            <p class="card__description">
              With real-time display of the daily changing parameters of a
              person from aggregated data received from wearables, portable bio
              container, AI server & the ML algorithm.
            </p>
          </div>
          <div class="vertical-cards">
            <div class="card top-card">
              <img
                class="card__image"
                src="@/assets/images/mobile-app.png"
                alt="main-bg"
              />
              <h3 class="card__heading">ML Algorithm</h3>
              <p class="card__description">
                With real-time display of the daily changing parameters of a
                person from aggregated data received from wearables, portable
                bio container, AI server & the ML algorithm.
              </p>
            </div>
            <div class="card">
              <img
                class="card__image"
                src="@/assets/images/ai-server.png"
                alt="main-bg"
              />
              <h3 class="card__heading">AI Server</h3>
              <p class="card__description">
                With real-time display of the daily changing parameters of a
                person from aggregated data received from wearables, portable
                bio container, AI server & the ML algorithm.
              </p>
            </div>
          </div>
        </div>
        <div class="track-ai__column">
          <div class="track-ai-content">
            <h1 class="track-ai-content__heading">
              BMI Disease Tracker - AI Health Check Up
            </h1>
            <p class="track-ai-content__description">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
            </p>
            <div class="btn">Learn more</div>
          </div>
        </div>
      </div>

      <div class="disease-tracker">
        <div class="disease-tracker__row">
          <div class="disease-tracker__column">
            <div class="default-block-content">
              <h1 class="default-block-content__heading">
                BMI Disease Tracker
              </h1>
              <p class="default-block-content__description">
                The technology developed by us quickly analyzes more than 400
                parameters of the physical state of the human body in real-time.
                Thanks to this, the user receives data on his health status in
                the mobile application and on the website, as well as personal
                recommendations aimed at improving his health condition.
              </p>
              <a class="default-block-content__learn-more" href=""
                >Learn More</a
              >
            </div>
          </div>
          <div class="disease-tracker__column">
            <img
              src="@/assets/images/bmi-disease-tracker.png"
              alt="disease-tracker-img"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TrackAiHealth",
};
</script>

<style lang="scss">
.track-ai {
  position: relative;
  background-image: url("~@/assets/images/second-section-bg.png");
  background-position: center;
  background-repeat: no-repeat;
  margin-top: rem(270px);
  scroll-margin-top: rem(300px);
  color: #1c1e30;
  &__row {
    @include row-flex();
    align-items: center;
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
      padding: rem(16px) rem(44px);
    }
  }
  .vertical-cards {
    display: flex;
    flex-direction: column;
  }
  .track-ai-content {
    text-align: left;
    &__heading {
      font-size: rem(52px);
      margin-bottom: rem(10px);
    }
    &__description {
      font-size: rem(18px);
      color: #303d53;
      margin-bottom: rem(30px);
      line-height: rem(32px);
    }
  }
}
.track-ai .cards-wrapper {
  display: flex;
  align-items: center;
  gap: rem(80px);
  .card {
    box-shadow: 3px 6px 12px #00000040;
    border-radius: rem(5px);
    padding: rem(10px);
    &__image {
      position: relative;
      left: rem(-80px);
      top: rem(-50px);
      height: auto;
      width: 260px;
    }
    &__description {
      margin-bottom: rem(50px);
      text-align: left;
      font-size: rem(18px);
      line-height: rem(22px);
      color: #707070;
    }
    &__heading {
      margin-top: rem(-25px);
      margin-bottom: rem(15px);
      font-family: FuturaPT-Demi;
      font-size: rem(28px);
    }
  }
  .top-card {
    position: relative;
    top: rem(-150px);
  }
}
.disease-tracker {
  padding-top: rem(100px);
  &__row {
    @include row-flex();
    align-items: center;
  }
  &__column {
    @include col();
    @include size(6);
  }
}
</style>
