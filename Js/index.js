//Função para fazer o efeito das letras
function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i)=> {
        setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });

}
//Função para fazer o favorito ficar com cor
const titulo = document.getElementById('corre');
typeWrite(titulo);

function someFunction (event) {
    const element = event.target;
    const className = element.className;
    
    if (className.includes('fa-heart') && !className.includes('active')) {
      element.classList.add('active')
    } else if (className.includes('fa-heart') && className.includes('active')) {
      element.classList.remove('active')
    }
  }
  window.addEventListener('click', someFunction, false);

//Função logar

const logado = localStorage.getItem('logado')
const sair = document.getElementById('sair')
const entar = document.getElementById('entrar')
const username = document.getElementById('username')
const dados = JSON.parse(localStorage.getItem('dados'))

if(logado){
  sair.style.display = ""
  entrar.style.display = "none"
  const nomeLogin = localStorage.getItem('nomeLogin')
  document.getElementById('username').children[0].children[1].innerHTML = "Olá "+nomeLogin.substr(0,7)+"..."
}else{
  entrar.style.display = ""
  sair.style.display = "none"
  document.getElementById('username').children[0].children[1].innerHTML = ""
}

function deslogar(event){
  event.preventDefault()
  localStorage.removeItem('logado')
  window.location.href = 'index.html'      
}