import axios from 'axios'

class InitAxios {
    constructor(path) {
        this.api = axios.create({
            baseURL: `https://instag.fly.dev/${path}`
        })

    }
}

export default InitAxios