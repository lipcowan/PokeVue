<template>
  <div class="poke-card">
    <img :src="poke.photo" :alt="poke.species" />
    <span>{{ poke.dex }}</span>
    <h3>{{ poke.species }}</h3>
  </div>
</template>

<script>
export default {
  name: 'PokeCard',
  props: {
    poke: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
img {
  width: 50%;
  height: auto;
  margin: 0;
  padding: 0;
}
.poke-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin: 18px;
}

.poke-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.poke-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
