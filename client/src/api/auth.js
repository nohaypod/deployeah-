import axios from 'axios'

const API = 'http://localhost:4000/api'

export const registerRequest = (rsvp) => axios.post(`${API}/register`, rsvp)