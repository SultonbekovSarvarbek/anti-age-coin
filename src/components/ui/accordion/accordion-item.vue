<template>
  <li class="accordion__item">
    <div
      class="accordion__trigger"
      :class="{ accordion__trigger_active: visible }"
      @click="open"
    >
      <span class="accordion-toggle">
        <span v-if="visible">-</span>
        <span v-else>+</span>
      </span>
      <div class="accordion-name"><slot name="accordion-trigger"></slot></div>
    </div>

    <transition
      name="accordion"
      @enter="start"
      @after-enter="end"
      @before-leave="start"
      @after-leave="end"
    >
      <div class="accordion__content" v-show="visible">
        <ul>
          <slot name="accordion-content"></slot>
        </ul>
      </div>
    </transition>
  </li>
</template>

<script>
export default {
  inject: ["Accordion"],
  data() {
    return {
      index: null,
    };
  },
  computed: {
    visible() {
      return this.index == this.Accordion.active;
    },
  },
  methods: {
    open() {
      if (this.visible) {
        this.Accordion.active = null;
      } else {
        this.Accordion.active = this.index;
      }
    },
    start(el) {
      el.style.height = el.scrollHeight + "px";
    },
    end(el) {
      console.log("end");
      el.style.height = "";
    },
  },
  created() {
    this.index = this.Accordion.count++;
  },
};
</script>

<style lang="scss" scoped>
.accordion {
  &__item {
    cursor: pointer;
    position: relative;
  }
  &__trigger {
    display: flex;
    align-items: center;
    gap: rem(14px);
    color: #232536;
  }
  &__trigger_active .accordion-toggle {
    color: #6c01cf;
    border: rem(2px) solid #6c01cf;
  }
  &-name h3 {
    font-family: FuturaPT-Heavy;
  }
  &-enter-active,
  &-leave-active {
    will-change: height, opacity;
    transition: height 0.3s ease, opacity 0.3s ease;
    overflow: hidden;
  }
  &-enter,
  &-leave-to {
    height: 0 !important;
    opacity: 0;
  }
  &-toggle {
    width: rem(36px);
    height: rem(36px);
    border-radius: 50%;
    display: flex;
    color: #e7e7e7;
    align-items: center;
    justify-content: center;
    border: rem(2px) solid #e7e7e7;
  }
  &__content {
    color: #6d7484;
  }
}
</style>
