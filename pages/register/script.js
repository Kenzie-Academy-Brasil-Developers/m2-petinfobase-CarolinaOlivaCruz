import { registerPost } from "../../scripts/api.js"

function register() {
    const inputs = document.querySelectorAll('input')
    const form = document.getElementById('form')
    form.addEventListener('submit', async (e) => {
        e.preventDefault()
        const data = {
            username: inputs[0].value,
            email: inputs[1].value,
            password: inputs[3].value,
            avatar: inputs[2].value,
        }
        await registerPost(data)
    })

    const buttonVoltar = document.querySelectorAll('.button-voltar')
    
    buttonVoltar.forEach(el => {
        console.log(el)
        el.addEventListener('click', ()=>{
            window.location.replace('../../index.html')
        })
    })
}
register()