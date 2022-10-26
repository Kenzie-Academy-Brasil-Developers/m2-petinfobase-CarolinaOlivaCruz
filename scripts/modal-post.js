export function modalPost(element){
    const divModal = document.querySelector('#modal')
    const containerModal = document.createElement('div')
    containerModal.className = 'container-modal'

    const divUserData = document.createElement('div')
    divUserData.className = 'card-user-data'
    const imgPost = document.createElement('img')
    imgPost.src = '../../src/user1.svg'
    const pName = document.createElement('p')
    const strong = document.createElement('strong')
    strong.innerText = 'Nome'
    const pDate = document.createElement('p')
    pDate.innerText = 'Data'
    const buttonClose = document.createElement('button')
    buttonClose.innerText = 'X'
    buttonClose.addEventListener('click', () => {
        divModal.innerText = ''
    })

    const article = document.createElement('article')
    article.className = 'post'
    const h2Title = document.createElement('h2')
    h2Title.innerText = 'Title'
    const pPost = document.createElement('p')
    pPost.innerText = 'Lorem'
    pPost.className = 'pPost'
    
   


    pName.appendChild(strong)
    divUserData.append(imgPost, pName, pDate, buttonClose)
    article.append(h2Title, pPost)
    containerModal.append(divUserData, article)
    divModal.appendChild(containerModal)
}