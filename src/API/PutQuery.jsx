import axios from "axios"

export const putQuery = (URL, data) => {
  return axios.patch(URL, {
    ...data,
  })
}
