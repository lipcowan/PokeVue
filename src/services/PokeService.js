import axios from 'axios'

const pokeServer = axios.create({
  baseURL: 'http://localhost:8000/api',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getPokemon() {
    return pokeServer.get('/')
  }
}
