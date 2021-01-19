<template>
  <div class="poke-details">
    <h2>{{ pokemon.species }}</h2>
    <img :src="pokemon.photo" :alt="pokemon.species" />
    <p>{{ pokemon.dex }}</p>
    <p>{{ pokemon.about }}</p>
    <p>{{ pokemon.likes }} likes</p>
    <p>$ {{ pokemon.price }}</p>
  </div>
</template>

<script>
export default {
    
}
</script>