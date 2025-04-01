const inserirLivros = document.getElementById('livros');
const totalLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis');

function inserirLivrosPagina(listaLivros) {
    totalLivrosDisponiveis.innerHTML = '';
    inserirLivros.innerHTML = '';
    listaLivros.forEach(livro => {
        let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel';

        inserirLivros.innerHTML += `
            <div class="livro">
                <div class="tags">
                    <span class="tag">${livro.categoria}</span>
                </div>
                <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
                <h2 class="livro__titulo">${livro.titulo}</h2>
                <p class="livro__descricao">${livro.autor}</p>
                <p class="livro__preco" id="preco">${livro.preco.toFixed(2)}</p>
                <div class="tags">
                    <span class="tag">${livro.categoria}</span>
                </div>
            </div>
        `;
    });
}
