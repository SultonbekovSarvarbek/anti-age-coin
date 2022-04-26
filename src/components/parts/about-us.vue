<template>
  <div class="about-us-block">
    <div class="about-us">
      <div class="container">
        <div class="about-us__row">
          <img
            class="about-us__img"
            src="@/assets/images/about-us.png"
            alt="about-us-image"
          />
          <div class="about-us-content">
            <span class="about-us__top-text">About us</span>
            <h1 class="about-us__heading">Longevity Intime</h1>
            <p class="about-us__description">
              Longevity InTime BioTech develops the real time technology of an
              online early stages diseases diagnosis by measuring human biodata
              online. With a hardware, software & a complex of devices we
              predict & prevent the severe diseases on the not known before
              earliest stages, which can affect longevity. The company's
              objective is in predicting & preventing severe diseases by instant
              distant real time monitoring of 400+ essential health parameters
              (biomarkers). With participatory of our users we give insights on
              their health & with AI server, trained on the 70+ years of G20 Big
              Data, we make personal recommendations how to avoid the upcoming
              diseases & to extend their own lifespan. .
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="testimonials">
      <span class="testimonials__top-text">TESTIMONIALS</span>
      <h1 class="testimonials__heading">Our Client Testimonials</h1>
      <div class="testimonials__slider">
        <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide class="swiper-item">
            <div class="testimonial-content">
              <img src="@/assets/images/ellipse.png" alt="ellipse" />
              <div class="card-info">
                <div>
                  <p class="card-info__fullname">Jena Karles</p>
                  <span class="card-info__position">CEO, Founder</span>
                </div>
                <p class="card-info__description">
                  “Success is making our clients succeed. Nothing else matters
                  how we work.”
                </p>
                <img src="" alt="" />
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="swiper-item">
            <div class="testimonial-content">
              <img src="@/assets/images/ellipse.png" alt="ellipse" />
              <div class="card-info">
                <div>
                  <p class="card-info__fullname">Jena Karles</p>
                  <span class="card-info__position">CEO, Founder</span>
                </div>
                <p class="card-info__description">
                  “Success is making our clients succeed. Nothing else matters
                  how we work.”
                </p>
                <img src="" alt="" />
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="swiper-item">
            <div class="testimonial-content">
              <img src="@/assets/images/ellipse.png" alt="ellipse" />
              <div class="card-info">
                <div>
                  <p class="card-info__fullname">Jena Karles</p>
                  <span class="card-info__position">CEO, Founder</span>
                </div>
                <p class="card-info__description">
                  “Success is making our clients succeed. Nothing else matters
                  how we work.”
                </p>
                <img src="" alt="" />
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="swiper-item">
            <div class="testimonial-content">
              <img src="@/assets/images/ellipse.png" alt="ellipse" />
              <div class="card-info">
                <div>
                  <p class="card-info__fullname">Jena Karles</p>
                  <span class="card-info__position">CEO, Founder</span>
                </div>
                <p class="card-info__description">
                  “Success is making our clients succeed. Nothing else matters
                  how we work.”
                </p>
                <img src="" alt="" />
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="swiper-item">
            <div class="testimonial-content">
              <img src="@/assets/images/ellipse.png" alt="ellipse" />
              <div class="card-info">
                <div>
                  <p class="card-info__fullname">Jena Karles</p>
                  <span class="card-info__position">CEO, Founder</span>
                </div>
                <p class="card-info__description">
                  “Success is making our clients succeed. Nothing else matters
                  how we work.”
                </p>
                <img src="" alt="" />
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="swiper-item">
            <div class="testimonial-content">
              <img src="@/assets/images/ellipse.png" alt="ellipse" />
              <div class="card-info">
                <div>
                  <p class="card-info__fullname">Jena Karles</p>
                  <span class="card-info__position">CEO, Founder</span>
                </div>
                <p class="card-info__description">
                  “Success is making our clients succeed. Nothing else matters
                  how we work.”
                </p>
                <img src="" alt="" />
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <div class="swiper-pagination" slot="pagination"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
  name: "AboutUsPage",
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 3,
        spaceBetween: 38,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    };
  },
};
</script>

<style lang="scss">
.about-us-block {
  margin-top: rem(280px);
  background-image: url("~@/assets/images/blue-light.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.about-us {
  color: $tx-full-black;
  &__row {
    @include row-flex();
    align-items: center;
    flex-wrap: nowrap;
    gap: rem(10px);
    position: relative;
    top: rem(-140px);
  }
  &-content,
  &__img {
    text-align: left;
    width: 50%;
  }
  &__top-text {
    font-size: rem(24px);
    line-height: rem(30px);
    margin-left: rem(50px);
    margin-bottom: rem(45px);
    font-family: Montserrat-SemiBold;
    display: inline-block;
  }
  &__heading {
    margin-left: rem(50px);
    font-size: rem(58px);
    line-height: rem(94px);
    font-family: Montserrat-Bold;
  }
  &__description {
    font-size: rem(20px);
    line-height: rem(36px);
    font-family: SegoeUI-Regular;
  }
}
.testimonials {
  color: #232536;
  padding: 0 30px;
  padding-bottom: rem(200px);
  &__slider {
    color: #333;
  }
  &__slider .swiper-pagination {
    position: unset;
    padding-top: rem(97px);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: rem(14px);
  }
  &__slider .swiper-pagination-bullet {
    background-color: #465fe9;
    opacity: 0.3;
    height: rem(6px);
    width: rem(6px);
    transition: all 0.3s;
  }
  &__slider .swiper-pagination-bullet-active {
    color: #00d0df;
    border-radius: rem(2px);
    height: rem(4px);
    width: rem(25px);
    opacity: 1;
  }
  &__top-text {
    color: #1b1b1b;
    font-size: rem(20px);
    opacity: 0.3;
    margin-bottom: rem(12px);
    display: inline-block;
  }
  &__heading {
    font-size: rem(56px);
    line-height: rem(60px);
    font-family: FuturaPT-Heavy;
    height: 137px;
  }
  .swiper-item {
    padding: rem(40px);
    padding-bottom: rem(53px);
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 0px rem(100px) #485b770d;
    border-radius: rem(5px);
    img {
      height: 100%;
    }
  }
  .card-info {
    &__description {
      margin-top: rem(25px);
    }
    &__fullname {
      font-weight: bold;
      margin-bottom: rem(10px);
    }
    &__position {
      font-weight: 200;
      font-family: FuturaPT;
      color: $tx-light-gray;
    }
  }
}
.testimonial-content {
  display: flex;
  gap: rem(36px);
  .card-info {
    text-align: left;
  }
}
</style>
