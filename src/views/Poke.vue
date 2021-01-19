<template>
  <div v-if="poke" class="poke">
    <h2>{{ poke.species }}</h2>
    <img :src="poke.photo" :alt="poke.species" />
    <h4>{{ poke.dex }}</h4>
    <p>{{ poke.about }}</p>
    <button>{{ poke.likes }} likes</button>
    <p>$ {{ poke.price }}</p>
  </div>
</template>

<script>
import PokeService from '@/services/PokeService.js'
export default {
  name: 'Details',
  props: ['id'],
  data() {
    return {
      poke: null
    }
  },
  created() {
    PokeService.getPoke(this.id)
      .then(res => {
        this.poke = res.data
      })
      .catch(e => {
        console.log(e)
      })
  }
}

</script>

<style scoped>
.poke {
  border: 1px solid #39495c;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
