import { deletPost } from "./api.js"
import { getInfo } from "../pages/home-post/script.js"


export async function modalDelete(elementId) {

    const divModal = document.querySelector('#modal')
    const containerModal = document.createElement('div')
    containerModal.className = 'container-modal'
    const sectionForm = document.createElement('section')

    const p = document.createElement('p')
    p.innerText = 'Deseja mesmo excluir?'

    const div = document.createElement('div')
    const button1 = document.createElement('button')
    button1.innerText = 'Sim'
    button1.addEventListener('click', async (e) => {
        e.preventDefault()
        await deletPost(elementId)
        await getInfo()
        setTimeout(() => {
            window.location.assign('./index.html')
        }, 500)
    })
    const button2 = document.createElement('button')
    button2.innerText = 'Não'
    button2.addEventListener('click', () => {
        setTimeout(() => {
            window.location.assign('./index.html')
        }, 500)
    })

    div.append(button1, button2)
    sectionForm.append(p, div)
    containerModal.appendChild(sectionForm)
    divModal.appendChild(containerModal)

    return divModal
}