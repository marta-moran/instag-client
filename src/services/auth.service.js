import InitAxios from "./init.service";

class AuthService extends InitAxios {
    constructor() {
        super('auth')
    }

    signup() {
        return this.api.post('/signup').then(({ data }) => data)
    }

    login(body) {
        return this.api.post('/login', body).then(({ data }) => data)
    }

    verify(token) {
        return this.axios.get('/verify', token).then((response) => response.data);
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new AuthService()
        }

        return this.instance
    }
}

export default AuthService.getInstance()