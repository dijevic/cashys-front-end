const baseUrl = process.env.REACT_APP_API_URL
export const fetchEmailVerification = (method, endPoind, token) => {
    const url = `${baseUrl}${endPoind}`

    if (method === 'GET') {
        return fetch(url, {
            headers: {
                'x-token': token
            }
        })
    }

    return fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json', 'x-token': token }
    })
}