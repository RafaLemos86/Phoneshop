function Cadastrar(event){
    event.preventDefault()
    const formData = new FormData(document.querySelector('form'))
    const name = formData.get('nome')
    const email = formData.get('email')
    const cemail = formData.get('cemail')
    const senha = formData.get('senha')
    if(email != cemail){
        alert('O email deve ser igual')
    }else{
        const dados = JSON.parse(localStorage.getItem('dados')) || []
        dados.push({name,email,senha})
        localStorage.setItem('dados',JSON.stringify(dados)); 
        window.location.href = 'login.html'      
    }
}