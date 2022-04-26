<template>
  <div class="longevity-scientific-resort">
    <div class="container">
      <div class="longevity-scientific-resort__row">
        <div class="longevity-scientific-resort__column">
          <img
            src="@/assets/images/longevity-resort.png"
            alt="longevity-resort"
          />
        </div>
        <div class="longevity-scientific-resort__column">
          <div class="default-block-content">
            <h1 class="default-block-content__heading">
              Longevity Scientific Resort
            </h1>
            <p class="default-block-content__description">
              Longevity Scientific Resorts: a network of uninhabited island
              hotels across the mild climate territories around the world with
              focus on longevity treatments & clinical trials. Besides the
              traditional standard package of hotel/resorts/rehab services with
              spa, beauty, cosmetology, fitness we offer participation in the
              breakthrough longevity clinical trials. To avoid early death -
              Lifetime health tracking included.
            </p>
            <a class="default-block-content__learn-more" href="#">Learn more</a>
          </div>
        </div>
      </div>
      <div class="health-check-up health-check-up__row">
        <div class="health-check-up__column default-block-content">
          <h1 class="default-block-content__heading">AI Health Check Up</h1>
          <p class="default-block-content__description">
            Collects additional environmental & behavioral data from other
            user's apps, with user's consent & gives better insights on the
            permanent changes of the wellbeing of the user with the state of art
            ML/NLP algorithms help.
          </p>
          <a class="default-block-content__learn-more" href="">Learn more</a>
        </div>
        <div class="health-check-up__column">
          <img
            src="@/assets/images/ai-health-check-up.png"
            alt="ai-health-check-up"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.longevity-scientific-resort {
  position: relative;
  background-image: url("~@/assets/images/third-section-bg.png");
  background-position: center;
  background-repeat: no-repeat;
  color: #1c1e30;
  &__row {
    @include row-flex();
    align-items: center;
  }
  &__column {
    @include col();
    @include size(6);
  }
}
.health-check-up {
  margin-top: rem(170px);
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
