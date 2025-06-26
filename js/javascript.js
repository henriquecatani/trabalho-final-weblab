
let trilho = document.getElementById("trilho")
let escuro = document.querySelector('body')
let indicador = document.getElementById("themeToggleImg")
let btnAcessibilidade = document.getElementById("botaoAcessibilidade")
let btnVoltar = document.getElementById("botaoVoltar")
trilho.addEventListener('click', ()=>{
        trilho.classList.toggle('light') // muda o tema do toggle
        escuro.classList.toggle('light') // muda o tema geral
        if (indicador.src.endsWith("/img/light_mode.png")) { // muda o tema dos icones, alterando a fonte da imagem de light pra dark e vice versa
                indicador.src='./img/dark_mode.png'
                btnAcessibilidade.src='./img/acessibilidadeW.png'
                btnVoltar.src='./img/backButtonW.png'
        }
        else{ // quando estiver dark
                indicador.src='./img/light_mode.png'
                btnAcessibilidade.src='./img/acessibilidadeB.png'
                btnVoltar.src='./img/backButtonB.png'
        }
})

function ativaAcessibilidade() {
        document.body.classList.toggle('acessibilidade')
}
