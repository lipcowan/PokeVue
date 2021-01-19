<template>
  <div class="poke-store">
    <PokeCard v-for="poke in pokemon" :key="poke.id" :poke="poke" />
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
.poke-store {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 18px;
}
</style>
