function alterarTema(){
    const tema = localStorage.getItem("tema")
    const body = document.querySelector("body")
    const button = document.querySelector(".tema-button")
    if (tema){
        if (tema ==="light"){
            novoTema = "dark"
            button.innerHTML = ` <img src="/imagens/sun-icon.png" alt="sol"></button>`
            body.classList.remove("light")
            body.classList.add("dark")
        }
    else{
        novoTema = "light"
       button.innerHTML = ` <img src="/imagens/moon-icon.png" alt="lua"></button> `
        body.classList.remove("dark")
            body.classList.add("light")
    }
    localStorage.setItem("tema",novoTema)
    return
    }
    localStorage.setItem("tema","dark")
    body.classList.add("dark")
}
function verificarTema() {
    const tema =localStorage.getItem("tema")
    const body = document.querySelector("body")
    const button = document.querySelector(".tema-button")
    if (tema ) {
        if (tema ==="dark")
        button.innerHTML = ` <img src="/imagens/sun-icon.png" alt="sol"></button>`
        body.classList.add("dark")
    }
    else{
        button.innerHTML = ` <img src="/imagens/moon-icon.png" alt="lua"></button> `
        body.classList.add("light")
    }
}
verificarTema()