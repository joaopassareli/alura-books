function aplicarDesconto(livros) {
    livrosComDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * 0.3)};
    });
    return livrosComDesconto;
}