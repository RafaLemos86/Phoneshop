function Logar(event) {
    event.preventDefault()
    const dados = JSON.parse(localStorage.getItem('dados'));
    const formData = new FormData(document.querySelector('form'))
    const password = formData.get('password')
    const email = formData.get('email')
    const valido = dados.filter(function (element) {
        return element.email == email && element.senha == password
    })
    if (valido.length) {
        localStorage.setItem('logado', true)
        localStorage.setItem('nomeLogin', valido[0].name)
    } else {
        alert('Dados inválidos')
    }
}