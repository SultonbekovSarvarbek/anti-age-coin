<template>
  <section class="team">
    <div class="container">
      <h1 class="team__heading">Our Hard Working Team</h1>
      <div class="team__row">
        <div class="team__column">
          <div class="staff">
            <img
              class="staff__image"
              src="@/assets/images/team/oleg.png"
              alt="staff-img"
            />
            <h3 class="staff__fullname">Oleg Tetrin</h3>
            <span class="staff__position">Chief Executive Officer</span>
            <p class="staff__about">
              Longevity InTime BioTech Investor, AgeTech Visionary. Scientific
              Resort on Maldives Mission to cut 115K daily death toll by 15K.
              Produced Chef Robert Downey Jr, Scarlett Johansson, M&A advisor to
              News Outdoor $400M deal.
            </p>
          </div>
        </div>
        <div class="team__column">
          <div class="staff">
            <img
              class="staff__image"
              src="@/assets/images/team/oleg.png"
              alt="staff-img"
            />
            <h3 class="staff__fullname">Oleg Tetrin</h3>
            <span class="staff__position">Chief Executive Officer</span>
            <p class="staff__about">
              Longevity InTime BioTech Investor, AgeTech Visionary. Scientific
              Resort on Maldives Mission to cut 115K daily death toll by 15K.
              Produced Chef Robert Downey Jr, Scarlett Johansson, M&A advisor to
              News Outdoor $400M deal.
            </p>
          </div>
        </div>
        <div class="team__column">
          <div class="staff">
            <img
              class="staff__image"
              src="@/assets/images/team/oleg.png"
              alt="staff-img"
            />
            <h3 class="staff__fullname">Oleg Tetrin</h3>
            <span class="staff__position">Chief Executive Officer</span>
            <p class="staff__about">
              Longevity InTime BioTech Investor, AgeTech Visionary. Scientific
              Resort on Maldives Mission to cut 115K daily death toll by 15K.
              Produced Chef Robert Downey Jr, Scarlett Johansson, M&A advisor to
              News Outdoor $400M deal.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Tema",
};
</script>

<style lang="scss">
.team {
  color: #232536;
  padding-top: rem(170px);
  &__heading {
    font-size: rem(55px);
    margin-bottom: rem(53px);
    font-family: FuturaPT-Heavy;
  }
  &__row {
    @include row-flex();
  }
  &__column {
    @include col();
    @include size(4);
    column-gap: rem(50px);
  }
}
.team .staff {
  &__image {
    margin-bottom: rem(27px);
    border-radius: 50%;
  }
  &__fullname {
    margin-bottom: rem(20px);
    color: $tx-full-black;
    font-family: Montserrat-Bold;
  }
  &__position {
    margin-bottom: rem(20px);
    color: #15aca7;
    font-size: rem(25px);
    line-height: rem(30px);
    font-family: Montserrat-SemiBold;
    display: block;
  }
  &__about {
    font-size: rem(18px);
    font-family: Montserrat-Regular;
    line-height: rem(30px);
  }
}
</style>
