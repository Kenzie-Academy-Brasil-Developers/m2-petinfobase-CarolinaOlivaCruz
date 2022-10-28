import { modalPost } from "../../scripts/modal-post.js"
import { selecionar } from "./modal-editar.js"
import { modalDelete } from "./modal-delete.js"

function renderPosts(element, idUser) {

    const li = document.createElement('li')
    li.className = 'card'

    const sectionTop = document.createElement('section')
    sectionTop.className = 'card-top'

    const divUserData = document.createElement('div')
    divUserData.className = 'card-user-data'
    const imgPost = document.createElement('img')
    imgPost.src = element.user.avatar
    const pName = document.createElement('p')
    const strong = document.createElement('strong')
    strong.innerText = element.user.username
    const pDate = document.createElement('p')
    pDate.innerText = element.createdAt
    const divButton = document.createElement('div')
    divButton.className = 'button-card'

    if (element.user.id == idUser) {
        const buttonEdit = document.createElement('button')
        buttonEdit.className = 'button-card-edit'
        buttonEdit.innerText = 'Editar'
        buttonEdit.addEventListener('click', async (e) => {
            e.preventDefault()
            await selecionar(element.id, 'edit')
        })
        const buttonDelet = document.createElement('button')
        buttonDelet.className = 'button-card-delet'
        buttonDelet.innerText = 'Deletar'
        buttonDelet.addEventListener('click',  (e) => {
            e.preventDefault()
             modalDelete(element.id)
        })
        divButton.append(buttonEdit, buttonDelet)
    }

    const article = document.createElement('article')
    article.className = 'post'
    const h2Title = document.createElement('h2')
    h2Title.className = 'titlePost'
    h2Title.innerText = element.title
    const pPost = document.createElement('p')
    pPost.className = 'pPost'
    pPost.innerText = element.content
    const buttonOpenPubli = document.createElement('button')
    buttonOpenPubli.className = 'button-open-publi'
    buttonOpenPubli.innerText = 'Acessar publicação'
    buttonOpenPubli.addEventListener('click', async (e) => {
        e.preventDefault()
        await selecionar(element.id, 'openPost')
    })

    pName.appendChild(strong)
    divUserData.append(imgPost, pName, pDate)
    sectionTop.append(divUserData, divButton)
    article.append(h2Title, pPost, buttonOpenPubli)
    li.append(sectionTop, article)

    return li
}


export function renderizaCard(array, id) {

    const ulCards = document.getElementById('listCards')
    ulCards.innerHTML = ''
    array.reverse().forEach(element => {
        ulCards.appendChild(renderPosts(element, id))
    });
}
