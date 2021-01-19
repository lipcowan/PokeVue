<template>
  <h1>Welcome to PokeVue!</h1>
  <div>
    <PokemonCard></PokemonCard>
  </div>
</template>

<script>
import PokemonCard from '@/components/PokemonCard.vue'
import PokeService from '@/services/PokeService.js'

export default {
  name: 'PokeStore',
  components: {
    PokemonCard
  },
  data() {
    return {
      pokemon: null
    }
  },
  created() {
    PokeService.getAll()
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
.pokeCard {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
