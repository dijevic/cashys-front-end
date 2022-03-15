const baseUrl = process.env.REACT_APP_API_URL

export const fetchWithNotToken = (data, method = 'GET', endPoind) => {

    const url = `${baseUrl}${endPoind}`

    if (method === 'GET') {
        return fetch(url)
    }

    return fetch(url, {
        method,
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    })
}




