export async function login(date) {
    const response = await fetch('http://localhost:3333/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(date)
    })
    if (response.status == 200) {
        const objToken = await response.json()
        localStorage.setItem('token', objToken.token)
       
        setTimeout(() => {
            window.location.assign('./pages/home-post/index.html')
        })

    } else if (response.status == 401) {
        return 'Email ou Senha inválidos'
    }
}

export async function criarPost(date){

    const response = await fetch('http://localhost:3333/posts/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(date)
    })
}