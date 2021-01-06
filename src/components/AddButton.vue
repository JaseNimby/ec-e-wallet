<template>
  <button v-on:click="click">NEW CARD</button>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
    },
  },

  methods: {
    click() {
      this.$emit("click");
    },
  },
};
</script>

<style scoped>
button.disabled {
  background-color: darkgrey;
  color: grey;
}

button {
  font-size: medium;
  padding: 0.5rem;
  width: 100%;
}
</style>