<template>
  <div class="form">
    <div>
      <div>CARD NUMBER</div>
      <input
        type="text"
        placeholder="XXXX XXXX XXXX XXXX"
        v-model="number"
        v-on:input="sent"
      />
    </div>
    <div>
      <div>CARDHOLDER NAME</div>
      <input
        class="name"
        placeholder="Firstname Lastname"
        type="text"
        v-model="name"
        v-on:input="sent"
      />
    </div>
    <div>MONTH / YEAR</div>
    <div>
      <select class="month" type="text" v-model="month" v-on:change="sent">
        <option disabled vlaue="" />
        <option>01</option>
        <option>02</option>
        <option>03</option>
        <option>04</option>
        <option>05</option>
        <option>06</option>
      </select>
      <select class="year" type="text" v-model="year" v-on:change="sent">
        <option disabled vlaue="" />
        <option>2021</option>
        <option>2022</option>
        <option>2023</option>
        <option>2024</option>
        <option>2025</option>
        <option>2026</option>
      </select>
    </div>

    <div class="vendor">
      <div>VENDOR</div>
      <select type="text" v-model="vendor" v-on:change="sent">
        <option disabled vlaue="empty" />
        <option value="bitcoin">Bitcoin Inc</option>
        <option value="evil">Evil Corp</option>
        <option value="ninja">Ninja Bank</option>
        <option value="blockchain">Blockchain Inc</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "card-form",
  data() {
    return {
      number: "",
      name: "",
      month: "",
      year: "",
      vendor: "",
    };
  },
  methods: {
    sent() {
      this.$emit("sent", {
        number: this.number,
        name: this.name,
        month: this.month,
        year: this.year,
        vendor: this.vendor,
      });
    },
  },
};
</script>

<style>
.form {
  margin: 1rem 0 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 1rem;
}
.form > div {
  padding: 0.25em;
}

input {
  font-size: medium;
  padding: 0.5rem;
  width: 100%;
}
select {
  font-size: medium;
  padding: 0.5rem;
}
</style>