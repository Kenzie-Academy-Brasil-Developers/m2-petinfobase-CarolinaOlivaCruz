function renderPosts(element) {
  
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
    const buttonEdit = document.createElement('button')
    buttonEdit.className = 'button-card-edit'
    buttonEdit.innerText = 'Editar'
    buttonEdit.addEventListener('click', () => {
        showModalEdit(element)
    })
    const buttonDelet = document.createElement('button')
    buttonDelet.className = 'button-card-delet'
    buttonDelet.innerText = 'Deletar'

    const article = document.createElement('article')
    article.className = 'post'
    const h2Title = document.createElement('h2')
    h2Title.innerText = element.title
    const pPost = document.createElement('p')
    pPost.className = 'pPost'
    pPost.innerText = element.content
    const buttonOpenPubli = document.createElement('button')
    buttonOpenPubli.className = 'button-open-publi'
    buttonOpenPubli.innerText = 'Acessar publicação'
    buttonOpenPubli.addEventListener('click', () => {
        modalPost()
    })

    pName.appendChild(strong)
    divUserData.append(imgPost, pName, pDate)
    divButton.append(buttonEdit, buttonDelet)
    sectionTop.append(divUserData, divButton)
    article.append(h2Title, pPost, buttonOpenPubli)
    li.append(sectionTop, article)

    return li
}


export function renderizaCard(array) {
    
    const ulCards = document.getElementById('listCards')
    array.reverse().forEach(element => {
        ulCards.appendChild(renderPosts(element))
    });   
}
