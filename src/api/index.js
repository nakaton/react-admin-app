/*
API Module: Include all the API in the application
Return: each API return a promise
*/

import ajax from './ajax'

const BASE = '';

// Login
// export function reqLogin(username, password){
//     return ajax('login', {username, password}, 'POST')
// }
export const reqLogin = (username, password) => ajax(BASE +'/login', {username, password}, 'POST')

// Add User
export const reqAddUser = (user) => ajax(BASE + '/manage/user/add', user, 'POST')

