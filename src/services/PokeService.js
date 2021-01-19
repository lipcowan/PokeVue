import axios from 'axios'

const pokeServer = axios.create({
  baseURL: 'https://damp-hollows-47513.herokuapp.com/api',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getAll() {
    return pokeServer.get('/')
  },
  getPoke(id) {
    return pokeServer.get('/' + id)
  },
  addLike(id) {
    return pokeServer.patch('/' + id)
  }
}
