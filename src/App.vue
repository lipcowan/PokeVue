<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'PokeStore' }">
        <img alt="PokeVue logo" src="@/assets/logo.png" />
      </router-link>
    </div>
    <h1>PokeVue</h1>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h4 {
  font-size: 20px;
}
</style>
