const correctAdminLogin = import.meta.env.VITE_ADMIN_LOGIN
const correctAdminPassword = import.meta.env.VITE_ADMIN_PASSWORD

export function checkAdminCredentials(login: string, password: string): boolean {
  console.log(correctAdminLogin, correctAdminPassword)
  console.log(login, password)
  console.log(login === correctAdminLogin && password === correctAdminPassword)
  return login === correctAdminLogin && password === correctAdminPassword
}