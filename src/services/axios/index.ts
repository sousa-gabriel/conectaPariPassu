import axios from 'axios'

const API = axios.create({
  baseURL: 'https://rastreador4g.paripassu.com.br/rest/public/',
})

export default API
