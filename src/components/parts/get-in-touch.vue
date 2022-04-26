<template>
  <div class="get-in-touch">
    <div class="get-in-touch__wrapper">
      <div class="container">
        <h1 class="get-in-touch__heading">Get In Touch</h1>
        <p class="get-in-touch__heading-subtext">
          vel modus honestatis ad, vim an vidit aliquam instructior. Alii
          efficiendi intellegebat nec ea, mea elitr interesset ea
        </p>
        <div class="get-in-touch-form">
          <form class="form">
            <div class="form-item">
              <base-input
                v-bind="$attrs"
                id="user-address"
                class="base-input"
                v-model.trim="user.email_address"
                label="Email Address"
                placeholder="let'sconnect@gmail.com"
              />
            </div>
            <div class="form-item">
              <base-input
                v-bind="$attrs"
                id="user-subject"
                class="base-input"
                v-model.trim="user.subject"
                label="Subject"
                placeholder=""
              />
            </div>
            <div class="form-item form-textarea">
              <base-textarea
                id="user-message"
                v-bind="$attrs"
                v-model.trim="user.message"
                class="base-textarea"
                :rows="10"
                :cols="8"
                label="I would like to discuss"
              />
            </div>
            <button class="btn" type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseInput from "../base/BaseInput.vue";
export default {
  components: { BaseInput },
  name: "GetInTouch",
  data() {
    return {
      user: {
        email_address: "",
        subject: "",
        message: "",
      },
    };
  },
};
</script>

<style lang="scss">
.get-in-touch {
  background-image: url("~@/assets/images/get-in-touch-bg.png");
  background-position: center top;
  background-repeat: no-repeat;
  min-height: rem(1120px);
  position: relative;
  .left-element {
    position: absolute;
    right: -11%;
    bottom: -20%;
  }
  &__wrapper {
    padding-top: rem(300px);
  }
  &__heading {
    font-size: rem(55px);
    line-height: rem(42px);
    font-family: FuturaPT-Heavy;
    margin-bottom: rem(33px);
  }
  &__heading-subtext {
    font-size: rem(20px);
    line-height: rem(34px);
    font-family: Hind-Regular;
    opacity: 0.75;
    max-width: 600px;
    margin: 0 auto;
    margin-bottom: rem(150px);
  }
  &-form {
    background-color: #fff;
    border-radius: rem(4px);
    padding: rem(50px) rem(80px);
    box-shadow: 0px rem(3px) rem(60px) #a6bcce26;
  }
}
.get-in-touch-form {
  .btn {
    box-shadow: unset;
    font-family: FuturaPT-Heavy;
    margin: 0 auto;
    margin-top: rem(50px);
  }
  .form {
    @include row-flex();
  }
  .form-item {
    @include col();
    @include size(6);
  }
  .form-textarea {
    margin-top: rem(25px);
    width: 100%;
  }
}
</style>
