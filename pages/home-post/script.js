function renderizaCard() {
    const body = document.getElementById('body')
    const sectionHeaderUser = document.getElementById('headerUser')

    const imgUser = document.createElement('img')
    imgUser.src = ''

    const ulCards = document.getElementById('listCards')
    const li = document.createElement('li')

    const sectionTop = document.createElement('section')
    sectionTop.className = 'card-top'

    const divUserData = document.createElement('div')
    divUserData.className = 'card-user-data'
    const imgPost = document.createElement('img')
    imgUser.src = ''
    const pName = document.createElement('p')
    const strong = document.createElement('strong')
    strong.innerText = 'Nome'
    const pDate = document.createElement('p')
    pDate.innerText = 'Data'

    const divButton = document.createElement('div')
    const buttonEdit = document.createElement('button')
    buttonEdit.className = 'button-card-edit'
    const buttonDelet = document.createElement('button')
    buttonDelet.className = 'button-card-delet'

    const article = document.createElement('article')


    sectionTop.append()
    li.append(sectionTop, article)
    ulCards.append(li)
    sectionHeaderUser.appendChild(imgUser)
    body.append(sectionHeaderUser, ulCards)

    return body

}

renderizaCard()