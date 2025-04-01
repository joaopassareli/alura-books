const botoes = document.querySelectorAll('.btn');

botoes.forEach((botao) => botao.addEventListener('click', filtrarLivros));

function filtrarLivros() {
    const elemento = document.getElementById(this.id);

    const categoria = elemento.value 
    let livrosFiltrados = (categoria == 'disponivel') ? filtrarDisponiveis() : filtrarCategoria(categoria);

    inserirLivrosPagina(livrosFiltrados);

    if (categoria == 'disponivel') {
        const valotTotal = calcularValorTotal(livrosFiltrados);
        exibirTotalLivrosDisponiveis(valotTotal);
    }
}

function filtrarCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarDisponiveis() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirTotalLivrosDisponiveis(valotTotal) {
    totalLivrosDisponiveis.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por <span id="valor">${valotTotal}</span></p>
        </div>
    `;
}
