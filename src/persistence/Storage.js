export async function storeToken(key,token) {
    localStorage.setItem(key,token)
}

export async function removeToken(key) {
    localStorage.removeItem(key)
}
