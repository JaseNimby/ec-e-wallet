<template>
  <header>
    <h1>E-wallet</h1>
    <p class="card-type">active card</p>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.top {
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  text-transform: uppercase;
}
p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

.top h1,
.top p {
  text-align: center;
  margin: 0px;
}

.top p {
  -webkit-box-flex: 1;
  font-size: 0.8rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.4);
  flex: 1 1 0%;
  padding: 0.25rem;
}
</style>