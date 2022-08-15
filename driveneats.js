function prato_selecionado(selecao) {
  const selecionadop = document.querySelector(".opcoes-pratos .seleciona");
  if (selecionadop !== null) {
    selecionadop.classList.remove("seleciona");
    }
  selecao.classList.add("seleciona"); 
  botao()
}

function bebida_selecionada(selecao) {
  const selecionadob = document.querySelector(".opcoes-bebidas .seleciona");
  if (selecionadob !== null) {
      selecionadob.classList.remove("seleciona");
    }
  selecao.classList.add("seleciona");
  let bebida = document.querySelector()
  botao()
}

function sobremesa_selecionada(selecao) {
  const selecionados = document.querySelector(".opcoes-sobremesas .seleciona");
  if (selecionados !== null) {
      selecionados.classList.remove("seleciona");
    }
  selecao.classList.add("seleciona");
  botao()
}

function botao() {
  if (document.querySelector(".opcoes-pratos .seleciona") && 
  document.querySelector(".opcoes-bebidas .seleciona") && 
  document.querySelector(".opcoes-sobremesas .seleciona") !== null) {
    const desligarbotao = document.querySelector(".div-botao");
    desligarbotao.classList.remove("div-botao");
    desligarbotao.classList.add("novo-botao")
    const elemento = document.querySelector(".muda-texto");
    elemento.innerHTML = "Fechar pedido";
  }
}

function acionar() {
  if (document.querySelector(".novo-botao") !== null) {
    const nome = prompt("Qual o seu nome?");
    const endereço = prompt("Qual o seu endereço?");
  }
}