/*
Module for localstorage data maintain
*/
import store from 'store'

const USER_KEY = 'user_key'

export default {
    /*
    Save user
    */
    saveUser (user){
        // localStorage.setItem(USER_KEY, JSON.stringify(user))
        store.set(USER_KEY, user)
    },

    /*
    Get User
    */
    getUser (){
        // return JSON.parse(localStorage.getItem(USER_KEY) || '{}')
        return store.get(USER_KEY) || {}
    },

    /*
    Delete User
    */
    removeUser(){
        // localStorage.removeItem(USER_KEY)
        store.remove(USER_KEY)
    }
}
