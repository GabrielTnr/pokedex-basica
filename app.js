function pesquisar() {
  // Seleciona a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  // Seleciona seção HTML para dar resultado na pesquisa
  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  // Retorna mensagem caso esteja vazio
  if (!campoPesquisa) {
    section.innerHTML = "<p class='alerta-nulo'>Nenhum pokémon foi encontrado. Você precisa escrever o nome de algum pokémon ou seu número na pokédex.</p>"
    return;
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  // Inicializa uma string vazia para armazenar os resultados da pesquisa
  let resultados = "";
  let pokemon = "";
  let numeroPokedex = "";
  let descricao = "";

  // Itera sobre cada elemento (dado) dentro da lista de dados
  for (let dado of dados) {
    pokemon = dado.pokemon.toLowerCase();
    numeroPokedex = dado.numeroPokedex.toLowerCase();
    descricao = dado.descricao.toLocaleLowerCase();

    if (pokemon.includes(campoPesquisa) || numeroPokedex.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
      // Concatena HTML para criar um novo elemento de resultado
      resultados += `
      <div class="item-resultado">
        <h2>
          <a href="#" target="_blank">${dado.pokemon}</a>
        </h2>
        <p>${dado.numeroPokedex}</p>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href="${dado.link}" target="_blank">Pokédex</a>
      </div>
    `;
    }
  }

  if (!resultados) {
    resultados = "<p class='alerta-nulo'>Nenhum pokémon foi encontrado. Os dados inseridos são inválidos.</p>"
  }
  // Atribui o HTML gerado para a seção de resultados
  section.innerHTML = resultados;
}