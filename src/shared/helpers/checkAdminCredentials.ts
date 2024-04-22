const correctAdminLogin = import.meta.env.VITE_ADMIN_LOGIN
const correctAdminPassword = import.meta.env.VITE_ADMIN_PASSWORD

export function checkAdminCredentials(login: string, password: string): boolean {
  return login === correctAdminLogin && password === correctAdminPassword
}