const baseUrl = 'http://localhost:3333/'
const token = localStorage.getItem('token')
const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
}

export async function registerPost(data) {
    const response = await fetch(`${baseUrl}users/create`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    }).then(response => {
        console.log(response);
        if (response.status < 300) {
            window.location.assign('../../index.html')
        }
    })
        .catch(err => console.log(err))
}


export async function login(data) {
    try {
        const response = await fetch(`${baseUrl}login`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)

        })
        console.log(response);

        const objToken = await response.json()

        localStorage.setItem('token', objToken.token)
        if(objToken.token){
            window.location.assign('./pages/home-post/index.html')
        } 
        else{
            throw new err
        }
    }
    catch (err) {
        console.log(err)
        return 'Email ou Senha inválidos'
    }
}

export async function getPost() {
    try {
        const response = await fetch(`${baseUrl}posts`, {
            method: 'GET',
            headers: headers
        })
        const responseJson = response.json()
        return responseJson
    }
    catch {
        console.log('deu ruim')
    }
}

export async function criarPost(data) {
    const response = await fetch(`${baseUrl}posts/create`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    }).then(res => res.json)
        .then(res => console.log(res))
    return response
}

export async function getProfile() {
    try {
        const response = await fetch(`${baseUrl}users/profile`, {
            method: 'GET',
            headers: headers
        })
        const responseJson = response.json()
        return responseJson
    }
    catch(err) {
        console.log(err)
    }
}


export async function deletPost(id){
    try {
        const response = await fetch(`${baseUrl}posts/${id}`, {
            method: 'DELETE',
            headers: headers
        })
        const responseJson = response.json()
        return responseJson
    }
    
    catch(err) {
        console.log(err)
    }

}

