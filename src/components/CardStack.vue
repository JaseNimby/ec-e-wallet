<template>
  <div>
    <div class="wrapper">
      <div class="centered">
        <div class="stack">
          <Card
            v-for="card in cards"
            v-bind:key="card.id"
            v-bind:card="card"
            @click="$emit(`showCard`, card)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
export default {
  name: "Cardstack",
  components: { Card },
  computed: {
    cards() {
      return this.$root.cardInfo;
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: inline-block;
}

.centered {
  align-items: center;
}

.stack {
  cursor: pointer;
}
</style>