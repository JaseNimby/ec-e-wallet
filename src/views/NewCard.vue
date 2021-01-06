<template>
  <div class="container">
    <div>
      <Card v-bind:card="card" class="card" />
    </div>
    <div>
      <CardForm v-on:sent="recieved" class="form" />
    </div>
    <div>
      <NewButton v-on:click="createCard" class="button" />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import CardForm from "@/components/CardForm.vue";
import NewButton from "@/components/NewButton.vue";

export default {
  name: "NewCard",
  data() {
    return {
      card: {
        number: "",
        name: "",
        month: "",
        year: "",
        vendor: "",
      },
    };
  },
  components: {
    Card,
    CardForm,
    NewButton,
  },

  methods: {
    recieved(grillkorv) {
      this.card.number = grillkorv.number;
      this.card.name = grillkorv.name;
      this.card.month = grillkorv.month;
      this.card.year = grillkorv.year;
      this.card.vendor = grillkorv.vendor;
    },

    createCard() {
      this.$root.cardInfo.push({
        id: Date.now(),
        number: this.card.number,
        name: this.card.name,
        month: this.card.month,
        year: this.card.year,
        vendor: this.card.vendor,
        completed: true,
      });
      this.$router.push("/");
    },
  },
};
</script>

<style>
.form {
  display: flex;
  align-items: center;
  flex-direction: row;
  display: inline-block;
}

.button {
  margin-bottom: 2rem;
}
</style>
