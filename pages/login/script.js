import { login } from '../../scripts/api.js'
const token = localStorage.getItem('token')
console.log(token);
if (token) {
  window.location.assign('./pages/home-post/index.html')
}


function validLogin() {
  const formLogin = document.querySelector('#formLogin')

  formLogin.addEventListener('submit', async (event) => {
    event.preventDefault()
  
    const inputs = document.querySelectorAll('.input')


    let object = {
      email: inputs[0].value,
      password: inputs[1].value
    }

    const retornoLogin = await login(object)
    if (retornoLogin != undefined) {
      const msgError = document.querySelector('.msg-error')
      msgError.innerText = retornoLogin
    }

    else {
      inputs[0].value = ''
      inputs[1].value = ''
    }

  })
}
validLogin()




function openRegister() {
  const buttonRegister = document.querySelector('#buttonRegister')
  buttonRegister.addEventListener('click', () => {
    return window.location.assign('./pages/register/index.html')
  })
}
openRegister()




