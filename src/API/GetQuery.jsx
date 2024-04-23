import axios from "axios"

export const getQuery = (URL) => {
  return axios.get(URL, {})
}
