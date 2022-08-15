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

