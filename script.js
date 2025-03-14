let itens = [];

function alimentaLista() {
  const conteudo = itens.map(
    (e, i) => `
        <div class="item-list">
            <label class="custom-checkbox">
              <input type="checkbox" />
              <span class="checkmark"></span>
              <span class="description">${e}</span>
            </label>
            <button class="button-trash" onclick="removerItem(${i})">
              <img src="assets/trash.svg" alt="" />
            </button>
          </div>
    `
  );

  document.getElementById("list").innerHTML = conteudo;
}

function adicionarItem() {
  const descricao = document.getElementById("item").value;

  if (!descricao || descricao == "") {
    return;
  }

  itens.push(descricao);

  document.getElementById("item").value = "";

  alimentaLista();
}

function removerItem(posicao) {
  itens.splice(posicao, 1);

  alimentaLista();

  exibeMsg(true);
}

function exibeMsg(exibir) {
  const conteudo = exibir
    ? `
        <div id="msg">
            <div id="msg-left">
                <img src="assets/alert.svg" alt="" />
                <span> O item foi removido da lista </span>
            </div>
            <button id="button-2" onclick="exibeMsg(false)">
                <img src="assets/x.svg" alt="" />
            </button>
        </div>
    `
    : "";

  let container = document.getElementById("msg-container");

  container.innerHTML = conteudo;

  setTimeout(() => {
    container.innerHTML = "";
  }, 3000);
}
