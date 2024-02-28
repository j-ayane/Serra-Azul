// Seleciona o campo de CPF
var cpfInput = document.getElementById("cpf");

// Adiciona um ouvinte de eventos de entrada no campo de CPF
cpfInput.addEventListener("input", function(event) {
    // Obtém o valor atual do campo de CPF
    var inputValue = event.target.value;

    // Remove todos os caracteres não numéricos
    var numericValue = inputValue.replace(/\D/g, "");

    // Limita o comprimento do valor a 11 caracteres (CPF tem 11 dígitos)
    numericValue = numericValue.substring(0, 11);

    // Formata o CPF com pontos e traço
    var formattedValue = "";

    for (var i = 0; i < numericValue.length; i++) {
        if (i == 3 || i == 6) {
            formattedValue += ".";
        } else if (i == 9) {
            formattedValue += "-";
        }
        formattedValue += numericValue.charAt(i);
    }

    // Atualiza o valor do campo de CPF com a versão formatada
    event.target.value = formattedValue;
});






// Seleciona todos os campos de entrada
var inputFields = document.querySelectorAll('input');

// Adiciona um ouvinte de eventos de entrada em cada campo
inputFields.forEach(function(input) {
    // Adiciona um ouvinte de evento de entrada
    input.addEventListener('input', function() {
        // Verifica se o campo está vazio ou não
        if (input.value.trim() === '') {
            // Exibe o asterisco vermelho associado ao campo
            input.parentElement.querySelector('.asterisk').style.display = 'inline';
            // Oculta o símbolo de aprovação
            input.parentElement.querySelector('.approval').textContent = '';
        } else {
            // Esconde o asterisco vermelho associado ao campo
            input.parentElement.querySelector('.asterisk').style.display = 'none';
            // Exibe o símbolo de aprovação
            input.parentElement.querySelector('.approval').textContent = '✓';
        }
    });
});

