<template>
  <div class="base-textarea">
    <label :for="id" class="base-textarea__label">{{ label }}</label>
    <textarea
      :id="id"
      :rows="rows"
      :cols="cols"
      :maxlength="maxLength"
      type="text"
      :name="name"
      :value="value"
      :disabled="disabled"
      class="base-textarea__input"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "BaseTextarea",
  props: {
    label: {
      type: String,
      required: true,
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
    rows: {
      type: Number,
      default: 10,
    },
    cols: {
      type: Number,
      default: 8,
    },
    maxLength: {
      type: Number,
      default: 200,
    },
  },
  computed: {
    name() {
      return this.label.toLowerCase();
    },
  },
};
</script>
<style lang="scss">
.base-textarea {
  position: relative;
  &__label {
    margin-bottom: rem(16px);
    font-size: rem(18px);
    color: #232536;
    text-align: left;
    line-height: 1.5;
    display: block;
    font-family: FuturaPT-Demi;
  }
  &__input {
    background: #ffffff;
    border-radius: rem(4px);
    border: 1px solid #dcdcdc;
    padding: rem(15px);
    display: block;
    transition: all 0.3s;
    width: 100%;
    resize: none;
  }
}
</style>
