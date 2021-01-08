<template>
  <div class="card" v-on:click="$emit(`click`)" v-bind:class="card.vendor">
    <header>
      <img src="../assets/chip-light.svg" />
      <img
        v-if="card.vendor"
        v-bind:src="require(`../assets/vendor-${card.vendor}.svg`)"
      />
    </header>

    <div class="number">{{ card.number }}</div>

    <section class="name">
      <aside class="input">
        CARDHOLDER NAME
        <span>{{ card.name }}</span>
      </aside>
    </section>

    <aside class="valid">
      <span>VALID UNTIL</span>
      <p class="month">{{ card.month }} / {{ card.year }}</p>
    </aside>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    card: Object,
  },
};
</script>

<style>
.card {
  max-width: 24rem;
  height: 14rem;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 0.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 2.8rem;
  text-shadow: rgba(255, 255, 255, 0.4) -1px -1px 2px;
  border-radius: 0.6rem;
  background: rgb(148, 147, 147);
  padding: 1rem;
  gap: 0.5rem 0px;
  color: beige;
}
.card > img {
  position: relative;
  top: 10%;
  right: 36%;
}

.card > header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  grid-column: auto/span 2;
  grid-row: auto/span 2;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
}
.card > .number {
  grid-column: auto/span 2;
  grid-row: auto/span 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 1.6rem;
  letter-spacing: 0.05rem;
  padding: 0.5rem 0 0;
}

.ninja {
  background-color: rgb(46, 46, 46);
}

.blockchain {
  background-color: rgb(134, 34, 228);
}

.bitcoin {
  background-color: rgb(255, 202, 28);
}

.evil {
  background-color: rgb(255, 0, 55);
}
</style>