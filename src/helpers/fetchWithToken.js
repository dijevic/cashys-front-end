const baseUrl = process.env.REACT_APP_API_URL
export const fetchWithToken = (data, method, endPoind) => {
    const url = `${baseUrl}${endPoind}`
    const token = localStorage.getItem('token') || ''
    if (method === 'GET') {
        return fetch(url, {
            headers: {
                'x-token': token
            }
        })
    }

    return fetch(url, {
        method,
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json', 'x-token': token }
    })
}