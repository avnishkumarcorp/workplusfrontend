import axios from "axios"

export const deleteQuery = (URL) => {
  return axios.delete(URL, {})
}
