import { getPost, getProfile } from "../../scripts/api.js"
// import { showModalEdit } from "../../scripts/modal-editar.js"
import { modalCreate } from "../../scripts/modal-create.js"
// import { modalPost } from "../../scripts/modal-post.js";
import { renderizaCard } from "../../scripts/posts.js"


function buttonLogout() {
    const button = document.getElementById('buttonLogout')
    button.addEventListener('click', () => {
        localStorage.clear()
        console.log('oi')
        window.location.replace('../../index.html')
    })
    const create = document.getElementById('CreatePost')
    create.addEventListener('click', (e) => {
        e.preventDefault()
        console.log('oi');
        modalCreate()
    })
}


const token = localStorage.getItem('token')
if (!token || token == undefined) {
    window.location.assign('../../index.html')
}else {
    buttonLogout()
}

async function getInfo() {
    const profile = await getProfile()
    const imgProfile = document.getElementById('imgProfile')
    imgProfile.src = profile.avatar
    const arrayPosts = await getPost()

    renderizaCard(arrayPosts)
}
getInfo()



