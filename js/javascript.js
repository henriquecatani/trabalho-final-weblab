// Estou cuidando do java script! (Otario)

let trilho = document.getElementById("trilho")
let escuro = document.querySelector('body')
// nao chama de dark chama de escuro pra diferenciar
trilho.addEventListener('click', ()=>{
        trilho.classList.toggle('light')
        escuro.classList.toggle('light')
})



// Inicio das funcoes de mudar tema (modo de ícone)
/* function dark() {
    document.body.className = "dark"
    document.getElementById("darktg").style.display = "none"
    document.getElementById("lighttg").style.display = ""
    document.getElementById("darklg").style.display = "none"
    document.getElementById("lightlg").style.display = ""
    localStorage.setItem('modo', '1')
    OLHA O CSS DELE
}*/
/*function light() {
    document.body.className = "light"
    document.getElementById("lighttg").style.display = "none"
    document.getElementById("darktg").style.display = ""
    document.getElementById("darklg").style.display = ""
    document.getElementById("lightlg").style.display = "none"
    localStorage.setItem('modo', '0')
}*/
/*let mode = localStorage.getItem('modo') || '0'
if (mode == '0') {
        dark()
} 
else {
        light()
        
}*/

// Fim das funcoes de mudar tema (modo de ícone)