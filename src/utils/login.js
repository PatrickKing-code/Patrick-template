export function getToken() {
    return sessionStorage.getItem('token')
}
export function setToken(token) {
    return sessionStorage.setItem('token', token)
}
export function setUsername(value) {
    return sessionStorage.setItem('username', value)
}
export function getUsername(value) {
    return sessionStorage.getItem('username', value)
}
export function removeToken() {
    return sessionStorage.removeItem('token')
}
export function removeUsername() {
    return sessionStorage.removeItem('username')
}