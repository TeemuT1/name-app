import axios from 'axios'
const baseUrl = '/api/names'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const getTotal = () => {
  const request = axios.get(`${baseUrl}/getTotal`)
  return request.then(response => response.data)
}

const getOne = () => {
  const request = axios.get(`${baseUrl}/:name`)
  return request.then(response => response.data)
}

export default { getAll, getTotal, getOne }