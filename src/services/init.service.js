import axios from 'axios'

class InitAxios {
    constructor(path) {
        this.api = axios.create({
            baseURL: `http://localhost:5005/${path}`
        })
        
    }
}

export default InitAxios