import axios from 'axios'

axios.defaults.baseURL = "https://api.disneyapi.dev"
axios.defaults.headers.post["Content-Type"] = "application/json"

export const api = {
    getCharacters: async () => {
        try {
            const response = await axios.get("/characters")
            return response.data.data
        }catch(err) {
            throw new Error(err)
        }
    }
}