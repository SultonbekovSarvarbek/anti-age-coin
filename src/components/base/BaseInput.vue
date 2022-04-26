<template>
  <div class="base-input">
    <label v-if="!noLabel" :for="id" class="base-input__label">{{
      label
    }}</label>
    <div class="base-input__wrapper">
      <input
        :id="id"
        :type="type"
        :placeholder="placeholder"
        autocomplete="on"
        :name="name"
        :value="value"
        :disabled="disabled"
        class="base-input__input"
        @input="$emit('input', $event.target.value)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    label: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    id: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    noLabel: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    name() {
      return this.label.toLowerCase() ? this.label : "";
    },
  },
};
</script>
<style lang="scss">
.base-input {
  position: relative;
  &__label {
    margin-bottom: rem(15px);
    font-size: rem(18px);
    color: #232536;
    font-family: FuturaPT-Demi;
    display: block;
    text-align: left;
  }
  &__input {
    border: 1px solid #dcdcdc;
    background: #ffffff;
    border-radius: rem(4px);
    padding: rem(15px) rem(20px);
    -webkit-padding-start: rem(15px);
    -webkit-appearance: textfield;
    font-size: 1rem;
    display: block;
    width: 100%;
    transition: all 0.3s;
  }
  &__wrapper {
    position: relative;
  }
}
</style>
