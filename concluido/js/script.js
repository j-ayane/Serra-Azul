function proximaPagina() {
    // Captura os valores dos campos
    var nome = document.getElementById("nome").value;
    var numeroCartao = document.getElementById("numero-cartao").value;
    var dataVencimento = document.getElementById("data-vencimento").value;
    var codigoSeguranca = document.getElementById("codigo-seguranca").value;

    // Passa os valores para a próxima página
    localStorage.setItem("nome", nome);
    localStorage.setItem("numeroCartao", numeroCartao);
    localStorage.setItem("dataVencimento", dataVencimento);
    localStorage.setItem("codigoSeguranca", codigoSeguranca);

    var confirmacao = confirm("Deseja realmente finalizar a compra?");

    // Se o usuário confirmar, redireciona para a próxima página
    if (confirmacao) {
        // Redireciona para a próxima página
        window.location.href = "../concluido/concluir.html";

    }
}

function voltarPagina() {
    // Volta para a página de pagamento
    window.location.href = "../pagamento/index.html";
}

window.onload = function () {

    var numeroCartaoInput = document.getElementById("numero-cartao");
    var codigoSegurancaInput = document.getElementById("codigo-seguranca");


    // Adiciona um ouvinte de evento para o campo de número do cartão
    numeroCartaoInput.addEventListener("input", function (event) {
        // Remove qualquer caractere que não seja número
        var numeroCartao = numeroCartaoInput.value.replace(/\D/g, "");

        // Limita o número do cartão a 16 caracteres
        numeroCartao = numeroCartao.substring(0, 16);

        // Atualiza o valor do campo de número do cartão
        numeroCartaoInput.value = numeroCartao;
    });

    // Adiciona um ouvinte de evento para o campo de código de segurança
    codigoSegurancaInput.addEventListener("input", function (event) {
        // Remove qualquer caractere que não seja número
        var codigoSeguranca = codigoSegurancaInput.value.replace(/\D/g, "");

        // Limita o código de segurança a 3 caracteres
        codigoSeguranca = codigoSeguranca.substring(0, 3);

        // Atualiza o valor do campo de código de segurança
        codigoSegurancaInput.value = codigoSeguranca;
    });
};
window.onload = function () {
    var infoPagamento = document.getElementById("info-pagamento");

    // Recupera os dados do localStorage
    var nome = localStorage.getItem("nome");
    var numeroCartao = localStorage.getItem("numeroCartao");
    var dataVencimento = localStorage.getItem("dataVencimento");
    var codigoSeguranca = localStorage.getItem("codigoSeguranca");

    // Exibe os dados na página de conclusão de pagamento
    infoPagamento.innerHTML = "<p><strong>Nome:</strong> " + nome + "</p>" +
        "<p><strong>Número do Cartão:</strong> " + numeroCartao + "</p>" +
        "<p><strong>Data de Vencimento:</strong> " + dataVencimento + "</p>" +
        "<p><strong>Código de Segurança:</strong> " + codigoSeguranca + "</p>";
};

document.addEventListener("DOMContentLoaded", function () {
    var botaoProximo = document.getElementById("botao-proximo");

    // Adiciona um ouvinte de evento para o botão de próximo
    botaoProximo.addEventListener("click", function () {
        // Exibe o modal de confirmação
        var modal = document.getElementById("myModal");
        modal.style.display = "block";
    });
});

// Obtém o elemento <span> que fecha o modal
var span = document.getElementsByClassName("close")[0];

// Quando o usuário clicar no <span> (x), fecha o modal
span.onclick = function () {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Event listener para o botão "Sim" (confirmar)
document.getElementById("confirmar").addEventListener("click", function () {
    // Redireciona para a próxima página
    window.location.href = "../pagamento/index.html";
});

// Event listener para o botão "Cancelar"
document.getElementById("cancelar").addEventListener("click", function () {
    var modal = document.getElementById("myModal");
    modal.style.display = "none"; // Fecha o modal
});




