import { criarPost } from "./api.js"

export function modalCreate() {
    const divModal = document.getElementById('modal')
    const containerModal = document.createElement('div')
    containerModal.className = 'container-modal'
    const sectionForm = document.createElement('section')

    const divTop = document.createElement('div')
    const h2 = document.createElement('h2')
    h2.innerText = 'Criando novo post'
    const buttonClose = document.createElement('button')
    buttonClose.innerText = 'X'
     buttonClose.addEventListener('click', () => divModal.innerText = '')

    const form = document.createElement('form')
    const labelTitle = document.createElement('label')
    labelTitle.innerText = 'Título do post'
    const titleInput = document.createElement('input')
    titleInput.placeholder = 'Digite o título aqui...'
    titleInput.id = 'titleInput'
    titleInput.type = 'text'
    const labelTextarea = document.createElement('label')
    const textarea = document.createElement('textarea')
    textarea.id = 'textarea'
    const formDivButton = document.createElement('div')
    const buttonCancelar = document.createElement('button')
    buttonCancelar.innerText = 'Cancelar'
    buttonCancelar.addEventListener('click', () => divModal.innerText = '')
    const buttonPublicar = document.createElement('button')
    buttonPublicar.innerText = 'Publicar'
    buttonPublicar.addEventListener('click', async (e) => {
        e.preventDefault()
        const data = {
            title: titleInput.value,
            content: textarea.value
        }
        await criarPost(data)
    })

    formDivButton.append(buttonCancelar, buttonPublicar)
    form.append(labelTitle, titleInput, labelTextarea, textarea, formDivButton)
    divTop.append(h2, buttonClose)
    sectionForm.append(divTop, form)
    containerModal.appendChild(sectionForm)
    divModal.appendChild(containerModal)
    console.log('oi modal');
}


// export function buttonCreatePost() {
//     const button = document.getElementById('CreatePost')
//     button.addEventListener('click', (e) => {
//         e.preventDefault()
//         console.log('oi');
//         modalCreate()
//     })
// }
