function pesquisar() {
    // Seleciona a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";

    // Itera sobre cada elemento (dado) dentro da lista de dados
    for (let dado of dados) {

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

    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
}