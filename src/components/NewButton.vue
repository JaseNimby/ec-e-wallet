<template>
  <button v-on:click="click">ADD NEW CARD</button>
</template>

<script>
export default {
  methods: {
    click() {
      this.$emit("click");
    },
  },
};
</script>

<style scoped>
button {
  font-size: medium;
  padding: 0.5rem;
  width: 100%;
}
</style>