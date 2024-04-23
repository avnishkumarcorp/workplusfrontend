import axios from "axios"

export const postQuery = (URL, data) => {
  return axios.post(URL, {
    ...data,
  })
}
