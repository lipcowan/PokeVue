<template>
  <h1>Welcome to PokeVue!</h1>
  <img alt="PokeVue logo" src="@/assets/logo.png" />
  <div class="poke-store">
    <PokeCard v-for="pokemon in pokemon" :key="pokemon.id" :pokemon="pokemon" />
  </div>
</template>

<script>
import PokeCard from '@/components/PokeCard.vue'
import PokeService from '@/services/PokeService.js'

export default {
  name: 'PokeStore',
  components: {
    PokeCard
  },
  data() {
    return {
      pokemon: null
    }
  },
  created() {
    PokeService.getPokemon()
      .then(res => {
        this.pokemon = res.data
      })
      .catch(e => {
        console.log(e)
      })
  }
}
</script>

<style scoped>
.poke-store {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 18px;
}
.poke-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.poke-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
