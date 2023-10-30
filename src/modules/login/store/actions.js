// import { api } from "src/boot/axios"; 
// Situación hipotetica de login
export function login({ commit }, payload) {

    return new Promise((resolve, reject) => {
        api.post(`Auth/login`, payload)
            .then(async res => {
                commit('SET_USER', payload)
                resolve(res);
            })
            .catch(err => {
                reject(err)
            });
    })
}