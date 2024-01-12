
    // Função para exibir um alerta ao clicar em um jogo da lista
    function exibirAlerta(jogo) {
        alert("Você clicou em " + jogo + "!");
    }

    // Adiciona um evento de clique aos elementos da lista de jogos
    document.addEventListener("DOMContentLoaded", function () {
        var jogos = document.querySelectorAll('h2 > li');

        jogos.forEach(function (jogo) {
            jogo.addEventListener("click", function () {
                exibirAlerta(jogo.innerText);
            });
        });
    });

