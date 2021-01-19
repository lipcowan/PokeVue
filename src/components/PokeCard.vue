<template>
  <div class="poke-card">
    <img :src="pokemon.photo" :alt="pokemon.species" />
    <span>{{ pokemon.dex }}</span>
    <h3>{{ pokemon.species }}</h3>
  </div>
</template>

<script>
export default {
  name: 'PokeCard',
  props: {
    pokemon: Object
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
</style>
