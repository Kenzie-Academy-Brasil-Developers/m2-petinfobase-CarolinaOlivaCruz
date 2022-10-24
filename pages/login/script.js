import { login } from '../../scripts/api.js'

function validLogin(){
  const formLogin = document.querySelector('#formLogin')

  formLogin.addEventListener('submit', async (event) => {
      event.preventDefault()
      
      const inputs = document.querySelectorAll('.input')
      let object = {}
  
      inputs.forEach(element => {
         object[element.getAttribute('name')] = element.value
      })
  
    const retornoLogin =  await login(object)
  
    if(retornoLogin != undefined) {
      const msgError = document.querySelector('.msg-error')
      msgError.innerText = retornoLogin
    } 

  })
}
validLogin()




function openRegister(){
  const buttonRegister = document.querySelector('#buttonRegister')
  buttonRegister.addEventListener('click', () => {
    return window.location.assign('./pages/register/index.html')
  })
}
openRegister()




