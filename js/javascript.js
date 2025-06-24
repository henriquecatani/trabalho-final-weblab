
let trilho = document.getElementById("trilho")
let escuro = document.querySelector('body')
let indicador = document.getElementById("themeToggleImg")
trilho.addEventListener('click', ()=>{
        trilho.classList.toggle('light') // muda o tema do toggle
        escuro.classList.toggle('light') // muda o tema geral
        if (indicador.src.endsWith("/img/light_mode.png")) { // muda o tema do icone no toggle, alterando a fonte da imagem de light pra dark e vice versa
                indicador.src='/img/dark_mode.png'
        }
        else{ // quando tiver icone dark
                indicador.src='/img/light_mode.png'
        }
})
