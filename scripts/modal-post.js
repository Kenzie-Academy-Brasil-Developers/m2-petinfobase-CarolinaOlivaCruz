export function modalPost(element){
    const divModal = document.querySelector('#modal')
    const containerModal = document.createElement('div')
    containerModal.className = 'container-modal'
    const sectionForm = document.createElement('section')

    const divUserData = document.createElement('div')
    divUserData.className = 'card-user-data'
    const imgPost = document.createElement('img')
    imgPost.src = element.user.avatar
    const pName = document.createElement('p')
    const strong = document.createElement('strong')
    strong.innerText = element.user.username
    const pDate = document.createElement('p')
    pDate.innerText = element.createdAt
    const buttonClose = document.createElement('button')
    buttonClose.innerText = 'X'
    buttonClose.addEventListener('click', () => {
        divModal.innerText = ''
    })

    const article = document.createElement('article')
    article.className = 'post'
    const h2Title = document.createElement('h2')
    h2Title.innerText = element.title
    const pPost = document.createElement('p')
    pPost.innerText = element.content
    pPost.className = 'pPost'
    
   


    pName.appendChild(strong)
    divUserData.append(imgPost, pName, pDate, buttonClose)
    article.append(h2Title, pPost)
    sectionForm.append(divUserData, article)
    containerModal.append(sectionForm)
    divModal.appendChild(containerModal)
}