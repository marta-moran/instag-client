import InitAxios from "./init.service"

class UserService extends InitAxios {
    constructor() {
        super('api')
    }

    getUsers() {
        return this.api.get('/getAll').then(({ data }) => data)
    }

    verify(token) {
        return this.axios.get('/verify', {
            headers: {
              'authorization' : `Bearer ${token}`
            }
          }).then((response) => response.data);
    } 

    static getInstance() {
        if (!this.instance) {
            this.instance = new UserService()
        }

        return this.instance
    }
}

export default UserService.getInstance()

// getUsers() {
//     return this.api.get('/list').then(({ data }) => data)
// }

// // CHEQUEAR CON EL TOKEN DEL LOGIN
// getFriendsPhotos(token) {
//     const headers = {
//         Authorization: `Bearer ${token}`
//     }

//     return this.api.get('/list/friendsPhotos', { headers }).then(({ data }) => data)
// }

// getFriends(user_id) {
//     return this.api.get(`/friends/${user_id}`).then(({ data }) => data)
// }

// getOneUser(user_id) {
//     return this.api.get(`/getOneUser/${user_id}`).then(({ data }) => data)
// }

// // POR CHEQUEAR
// getLoggedUser(token) {
//     const headers = {
//         Authorization: `Bearer ${token}`
//     }

//     return this.api.get('/getLoggedUser', { headers }).then(({ data }) => data)
// }

// // POR CHEQUEAR
// likePhoto(photo_id, token) {
//     const headers = {
//         Authorization: `Bearer ${token}`
//     }

//     return this.api.put(`/like/${photo_id}`, {}, { headers }).then(({ data }) => data)
// }

// // POR CHEQUEAR
// dislikePhoto(photo_id, token) {
//     const headers = {
//         Authorization: `Bearer ${token}`
//     }

//     return this.api.put(`/dislike/${photo_id}`, {}, { headers }).then(({ data }) => data)
// }


// editUser(user_id, body) {
//     return this.api.put(`/edit/${user_id}`, body).then(({ data }) => data)
// }

// // POR CHEQUEAR
// followUser(user_id, token) {
//     const headers = {
//         Authorization: `Bearer ${token}`
//     }

//     return this.api.put(`/follow/${user_id}`, {}, { headers }).then(({ data }) => data)
// }

// // POR CHEQUEAR
// unfollowUser(user_id, token) {
//     const headers = {
//         Authorization: `Bearer ${token}`
//     }

//     return this.api.put(`/unfollow/${user_id}`, {}, { headers }).then(({ data }) => data)
// }

// deleteUser(user_id) {
//     return this.api.delete(`/delete/${user_id}`).then(({ data }) => data)
// }