let btnOrdenacao = document.getElementById('btnOrdenarPorPreco');

btnOrdenacao.addEventListener('click', ordenarLivrosPorPreco);

function ordenarLivrosPorPreco() {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
    inserirLivrosPagina(livrosOrdenados);
}