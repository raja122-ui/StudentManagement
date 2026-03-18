import axios from 'axios'

const API_URL = 'http://localhost:8000/api'

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const getStudents = async () => {
  const response = await api.get('/students/')
  return response.data
}

export const getStudent = async (id) => {
  const response = await api.get(`/students/${id}/`)
  return response.data
}

export const createStudent = async (studentData) => {
  const response = await api.post('/students/', studentData)
  return response.data
}

export const updateStudent = async (id, studentData) => {
  const response = await api.put(`/students/${id}/`, studentData)
  return response.data
}

export const deleteStudent = async (id) => {
  const response = await api.delete(`/students/${id}/`)
  return response.data
}
