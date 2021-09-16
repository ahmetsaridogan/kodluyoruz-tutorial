import axios from 'axios'
const API_URL = 'https://jsonplaceholder.typicode.com'

export default (userId) => {
    return new Promise(async (resolve, reject) => {
       const {data} = await axios(`${API_URL}/users/${userId}`)
       resolve(data)
    })
}
