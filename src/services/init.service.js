import axios from 'axios'

class InitAxios {
    constructor(path) {
        this.api = axios.create({
            baseURL: `https://instag-server-production.up.railway.app/${path}`
        })

    }
}

export default InitAxios