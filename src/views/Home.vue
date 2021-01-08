<template>
  <div>
    <main id="home">
      <header class="top">
        <Top />
      </header>
      <section class="selctedCard">
        <Card class="card" v-bind:card="chosenCard" v-if="chosenCard" />
        <button class="button" v-if="chosenCard" v-on:click="remove">X</button>
      </section>
      <section class="cardStack">
        <CardStack v-on:showCard="showCard" />
      </section>
      <p>
        <router-link to="/NewCard"> <AddButton /></router-link>
      </p>
    </main>
  </div>
</template>

<script>
import Top from "@/components/Top.vue";

import Card from "@/components/Card.vue";
import CardStack from "@/components/CardStack.vue";
import AddButton from "@/components/AddButton.vue";

export default {
  name: "Home",
  components: { Top, Card, CardStack, AddButton },
  data() {
    return {
      chosenCard: null,
    };
  },

  methods: {
    showCard(shown) {
      this.chosenCard = {
        number: shown.number,
        name: shown.name,
        month: shown.month,
        year: shown.year,
        vendor: shown.vendor,
      };
    },
    remove(cardToRemove) {
      this.$root.cardInfo = this.$root.cardInfo.filter(
        (card) => card.id != cardToRemove.id
      );
    },
  },
};
</script>

<style scoped>
main {
  display: block;
}

.top {
  margin-bottom: 2rem;
}

.selectedCard {
  margin-bottom: 2rem;
}
.cardStack {
  margin-bottom: 2rem;
}
.button {
  position: relative;
  top: 1%;
  right: 10%;
}
p {
  margin-bottom: 2rem;
}
</style>