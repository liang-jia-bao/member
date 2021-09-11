export function getToken() {
  return localStorage.getItem('token')
}
export function setToken(token) {
  return localStorage.setItem('token', token)
}
export function getUser() {
  return localStorage.getItem('info')
}
export function setUser(user) {
  return localStorage.setItem('info', JSON.stringify(user))
}
export function removeUser() {
  localStorage.removeItem('token')
  localStorage.removeItem('info')

}