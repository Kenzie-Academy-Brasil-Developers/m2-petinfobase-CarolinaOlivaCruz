import { getPost } from "./api.js"
import { modalPost } from "./modal-post.js"

export async function selecionar(id, functionSelecionar){

    const posts = await getPost()
    const returnPost = posts.find(element => element.id === id)
    console.log(returnPost);
    if(functionSelecionar == 'edit'){
        showModalEdit(returnPost)

    } else if(functionSelecionar == 'openPost') {
        modalPost(returnPost)
    }
}

function showModalEdit(element) {

        const body = document.querySelector('#modal')
        const article = document.querySelector('.post')
        const h2Title = document.querySelector('.Title')
        const pPost = document.querySelector('.pPost')

        article.append(h2Title, pPost)
        body.appendChild(article)
    

}
