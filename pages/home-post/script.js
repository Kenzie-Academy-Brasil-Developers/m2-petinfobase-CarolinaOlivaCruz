import { getPost, getProfile } from "../../scripts/api.js"
// import { showModalEdit } from "../../scripts/modal-editar.js"
import { modalCreate } from "../../scripts/modal-create.js"
// import { modalPost } from "../../scripts/modal-post.js";
import { renderizaCard } from "../../scripts/posts.js"


function buttonLogout() {
    const button = document.getElementById('buttonLogout')
    button.addEventListener('click', () => {
        localStorage.clear()
        window.location.assign('../../index.html')
    })
    const create = document.getElementById('CreatePost')
    create.addEventListener('click', (e) => {
        e.preventDefault()
        modalCreate()
    })
}


const token = localStorage.getItem('token')
if (!token || token == undefined) {
    window.location.assign('../../index.html')
}else {
    buttonLogout()
}

export async function getInfo() {
    const profile = await getProfile()
    const imgProfile = document.getElementById('imgProfile')
    imgProfile.src = profile.avatar
    const arrayPosts = await getPost()

    renderizaCard(arrayPosts, profile.id)
}
getInfo()



