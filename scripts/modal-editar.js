import { getPost } from "./api.js"
import { modalPost } from "./modal-post.js"
import { atualizaPost } from "./api.js"

export async function selecionar(id, functionSelecionar) {

    const posts = await getPost()
    const returnPost = posts.find(element => element.id === id)
    if (functionSelecionar == 'edit') {
        showModalEdit(returnPost)

    } else if (functionSelecionar == 'openPost') {
        modalPost(returnPost)
    }
}

function showModalEdit(element) {
console.log(element)
    const divModal = document.querySelector('#modal')
    const containerModal = document.createElement('div')
    containerModal.className = 'container-modal'
    const sectionForm = document.createElement('section')

    const inputTitle = document.createElement('input')
    inputTitle.value = element.title

    const buttonClose = document.createElement('button')
    buttonClose.innerText = 'X'
    buttonClose.className = 'button-close'
    buttonClose.addEventListener('click', () => divModal.innerText = '')

    const textareaPost = document.createElement('textarea')
    textareaPost.value = element.content

    const buttonSubmit = document.createElement('button')
    buttonSubmit.type = 'submit'
    buttonSubmit.innerText = 'Enviar'
    buttonSubmit.addEventListener('click', async (e) => {
        e.preventDefault()
        const data = {
            title: inputTitle.value,
            content: textareaPost.value
        }
        console.log(data)
       await atualizaPost(element.id, data)
       await getPost()
       setTimeout(() => {
        window.location.assign('./index.html')
       }, 500);
    })

    sectionForm.append(inputTitle, buttonClose, textareaPost, buttonSubmit)
    containerModal.appendChild(sectionForm)
    divModal.appendChild(containerModal)


}
