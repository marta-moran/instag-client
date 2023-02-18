import InitAxios from "./init.service"

class PostService extends InitAxios {
    constructor() {
        super('post')
    }

    createPost(body) {
        return this.api.post('/publishPost', body).then(({ data }) => data)
    }

    getAllPost(token) {
        const headers = {
            Authorization: `Bearer ${token}`
        }

        return this.api.get('/getAllPosts', { headers }).then(({ data }) => data)
    }

    uploadPhoto(formData) {
        return this.api.post('/fileUpload', formData).then(({ data }) => data)
    }

    getDetailsPhoto(id) {
        return this.api.get(`/getOnePost/${id}`).then(({ data }) => data)
    }


    static getInstance() {
        if (!this.instance) {
            this.instance = new PostService()
        }

        return this.instance
    }
}

export default PostService.getInstance()