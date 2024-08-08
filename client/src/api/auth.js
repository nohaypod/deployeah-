import axios from 'axios'

const API = 'http://localhost:4000/api'

export const registerRequest = (rsvp) => axios.post(`${API}/register`, rsvp);
export const getAllRsvpsRequest = () => axios.get(`${API}/registros`, rsvp);
export const getRsvpRequest = (id) => axios.get(`${API}/rsvp/${id}`, rsvp);
export const deleteRsvpRequest = (id) => axios.delete(`${API}/rsvp/${id}`, rsvp);
export const updateRsvpRequest = (id,rsvp) => axios.put(`${API}/rsvp/${id}`, rsvp);