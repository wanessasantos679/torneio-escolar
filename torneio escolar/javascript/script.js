// Função para calcular os pontos de cada partida
function calcularPontos(resultado) {
    if (resultado === 'ganhou') {
        return 3;  // Time ganha 3 pontos por vitória
    } else {
        return 1;  // Time ganha 1 ponto por participação
    }
}

// Função para calcular a pontuação e determinar o vencedor
function calcularPontuacao(event) {
    event.preventDefault();  // Evitar o envio do formulário

    // Receber os resultados das partidas
    const partida1 = document.getElementById('partida1').value;
    const partida2 = document.getElementById('partida2').value;
    const partida3 = document.getElementById('partida3').value;
    const partida4 = document.getElementById('partida4').value;
    const partida5 = document.getElementById('partida5').value;
    const partida6 = document.getElementById('partida6').value;

    // Calcular os pontos totais
    const pontos = calcularPontos(partida1) + calcularPontos(partida2) + 
                   calcularPontos(partida3) + calcularPontos(partida4) + 
                   calcularPontos(partida5) + calcularPontos(partida6);

    // Exibir a pontuação total
    document.getElementById('pontuacao').textContent = `Pontuação Total: ${pontos} pontos`;

    // Verificar se o time ganhou 4 partidas para ser campeão
    let campeao = '';
    if (pontos >= 12) {
        campeao = 'Você é o campeão!';
    } else {
        campeao = 'Infelizmente, você não é o campeão.';
    }

    // Exibir o vencedor
    document.getElementById('campeao').textContent = campeao;
}

// Adicionar evento de envio do formulário
document.getElementById('resultadoForm').addEventListener('submit', calcularPontuacao);
