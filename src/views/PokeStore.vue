<template>
  <h1>Welcome to PokeVue!</h1>
  <img alt="PokeVue logo" src="@/assets/logo.png" />
  <div>
    <PokeCard v-for="pokemon in pokemon" :key="pokemon.id" :pokemon="pokemon" />
  </div>
</template>

<script>
import PokeCard from '@/components/PokeCard.vue'
import axios from 'axios'

export default {
  name: 'PokeStore',
  components: {
    PokeCard,
  },
  data() {
    return {
      pokemon: null,
    }
  },
  created() {
    axios
      .get('http://localhost:8000/api/')
      .then(res => {
        this.pokemon = res.data
      })
      .catch((e) => {
        console.log(e)
      })
  },
}
</script>

<style scoped>
.poke-card {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
