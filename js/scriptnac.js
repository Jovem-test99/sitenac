function verificar() {
    var pais = window.document.querySelector('input#nactxt')
    var res = window.document.querySelector('div.suanac')
    var nac = pais.value
    if (nac == 'Brasil' || nac == 'brasil') {
        res.innerHTML = 'Você é brasileiro'
    } else  {
        res.innerHTML = 'Você é estrangeiro'
    }
}