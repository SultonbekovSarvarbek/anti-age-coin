<template>
  <div class="faq">
    <div class="container">
      <h1 class="faq__heading">
        Crypto FAQ’s <br />
        Frequently Asked Questions
      </h1>
      <div class="faq__content">
        <accordion>
          <accordion-item>
            <template slot="accordion-trigger">
              <h3>What is Longevity Coin?</h3>
            </template>
            <template slot="accordion-content">
              <span class="accordion-text"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.</span
              >
            </template>
          </accordion-item>
        </accordion>
        <accordion>
          <accordion-item>
            <template slot="accordion-trigger">
              <h3>
                What is the difference between Long Coin and other Projects?
              </h3>
            </template>
            <template slot="accordion-content">
              <span class="accordion-text"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.</span
              >
            </template>
          </accordion-item>
        </accordion>
        <accordion>
          <accordion-item>
            <template slot="accordion-trigger">
              <h3>Tokenomics of Coin?</h3>
            </template>
            <template slot="accordion-content">
              <span class="accordion-text"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.</span
              >
            </template>
          </accordion-item>
        </accordion>
        <accordion>
          <accordion-item>
            <template slot="accordion-trigger">
              <h3>How can you use Long Coins?</h3>
            </template>
            <template slot="accordion-content">
              <span class="accordion-text"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.</span
              >
            </template>
          </accordion-item>
        </accordion>
        <accordion>
          <accordion-item>
            <template slot="accordion-trigger">
              <h3>Can I invest in Longevity Coin?</h3>
            </template>
            <template slot="accordion-content">
              <span class="accordion-text"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.</span
              >
            </template>
          </accordion-item>
        </accordion>
      </div>
    </div>
  </div>
</template>

<script>
import AccordionItem from "../ui/accordion/accordion-item.vue";
import accordion from "../ui/accordion/accordion.vue";
export default {
  components: { accordion, AccordionItem },
  name: "FaqPage",
};
</script>

<style lang="scss">
.faq {
  &__heading {
    color: #232536;
    font-family: FuturaPT-Heavy;
    font-size: rem(48px);
    margin-bottom: rem(42px);
  }
  .accordion-text {
    margin-top: 50px;
    display: inline-flex;
    text-align: left;
    line-height: rem(31px);
    font-family: Hind-Regular;
  }
  &__content {
    @include row-flex();
    row-gap: rem(50px);
    .accordion {
      @include col();
      @include size(6);
    }
  }
}
</style>
