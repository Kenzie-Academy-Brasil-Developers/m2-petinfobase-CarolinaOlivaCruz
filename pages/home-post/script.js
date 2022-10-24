function renderizaCard() {
    const header = document.querySelector('.container-header')
    const sectionHeaderUser = document.getElementById('headerUser')

    const imgUser = document.createElement('img')
    imgUser.src = ''

    const ulCards = document.getElementById('listCards')
    const li = document.createElement('li')
    li.className = 'card'

    const sectionTop = document.createElement('section')
    sectionTop.className = 'card-top'

    const divUserData = document.createElement('div')
    divUserData.className = 'card-user-data'
    const imgPost = document.createElement('img')
    imgPost.src = '../../src/user1.svg'
    const pName = document.createElement('p')
    const strong = document.createElement('strong')
    strong.innerText = 'Nome'
    const pDate = document.createElement('p')
    pDate.innerText = 'Data'

    const divButton = document.createElement('div')
    divButton.className = 'button-card'
    const buttonEdit = document.createElement('button')
    buttonEdit.className = 'button-card-edit'
    buttonEdit.innerText = 'Editar'
    const buttonDelet = document.createElement('button')
    buttonDelet.className = 'button-card-delet'
    buttonDelet.innerText = 'Deletar'

    const article = document.createElement('article')
    article.className = 'post'
    const h2Title = document.createElement('h2')
    h2Title.innerText = 'Title'
    const pPost = document.createElement('p')
    pPost.innerText = 'Lorem'
    const buttonOpenPubli = document.createElement('button')
    buttonOpenPubli.className = 'button-open-publi'
    buttonOpenPubli.innerText = 'Acessar publicação'



    sectionHeaderUser.appendChild(imgUser)
    header.appendChild(sectionHeaderUser)

    pName.appendChild(strong)
    divUserData.append(imgPost, pName, pDate)
    divButton.append(buttonEdit, buttonDelet)
    sectionTop.append(divUserData, divButton)
    article.append(h2Title, pPost, buttonOpenPubli)
    li.append(sectionTop, article)
    ulCards.append(li)


    return ulCards

}

renderizaCard()