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


    // Redireciona para a próxima página
    window.location.href = "../concluido/concluir.html";
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

