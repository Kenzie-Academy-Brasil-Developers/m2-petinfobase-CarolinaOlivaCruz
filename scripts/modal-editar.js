import { getPost } from "./api.js"
import { modalPost } from "./modal-post.js"

export async function selecionar(id, functionSelecionar) {

    const posts = await getPost()
    const returnPost = posts.find(element => element.id === id)
    console.log(returnPost);
    if (functionSelecionar == 'edit') {
        showModalEdit(returnPost)

    } else if (functionSelecionar == 'openPost') {
        modalPost(returnPost)
    }
}

function showModalEdit(element) {

    const divModal = document.querySelector('#modal')
    const containerModal = document.createElement('div')
    containerModal.className = 'container-modal'
    const sectionForm = document.createElement('section')
    const h2Title = document.querySelector('.titlePost')
    const buttonClose = document.createElement('button')
    buttonClose.innerText = 'X'
    buttonClose.className = 'button-close'
    buttonClose.addEventListener('click', () => divModal.innerText = '')
    const pPost = document.querySelector('.pPost')

    sectionForm.append(h2Title, buttonClose, pPost)
    containerModal.appendChild(sectionForm)
    divModal.appendChild(containerModal)

}
