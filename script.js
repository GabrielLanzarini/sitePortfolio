document.addEventListener('scroll' , () => {
    if (verificaSecao('primeira-secao') == true) animacoesPrimeiraSecao();
    else if (verificaSecao('segunda-secao') == true) animacoesSegundaSecao();
    else if (verificaSecao('terceira-secao') == true) animacoesTerceiraSecao();
})

function verificaSecao(secao){
    let sec = document.getElementById(`${secao}`)
    sec.scrollIntoView

    const posicoes = sec.getBoundingClientRect();
    const inicio = posicoes.top;
    const fim = posicoes.bottom;

    if((inicio >= 0) && (fim <= window.innerHeight)) {
        return true;
    }
}

document.addEventListener('click', (el) => {
    elementTarget = el.target;

    if (elementTarget.innerText == '_Olá') {
        scroolSecoes('primeira-secao');
    }
    else if (elementTarget.innerText == '_Sobre_Mim'){
        scroolSecoes('segunda-secao');
    }
    else if (elementTarget.innerText == '_Projetos'){
        scroolSecoes('terceira-secao');
    }
})



function scroolSecoes(secao){
    let secaoDoc =  document.getElementById(secao)
    secaoDoc.scrollIntoView({behavior: "smooth", block: "end"});
}



