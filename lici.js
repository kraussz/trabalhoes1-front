function mostrar() {
    // Substitua a URL abaixo pela URL da sua API
    const apiUrl = 'http://localhost:8080/usuario';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const tabela = document.getElementById('tabela-licitacoes').getElementsByTagName('tbody')[0];
            tabela.innerHTML = '';

            data.forEach(licitacao => {
                const novaLinha = tabela.insertRow();
                const celulaNome = novaLinha.insertCell(0);
                const celulaSetor = novaLinha.insertCell(1);
                const celulaDataInicio = novaLinha.insertCell(2);
                const celulaHorarioInicio = novaLinha.insertCell(3);
                const celulaHorarioFim = novaLinha.insertCell(4);

                celulaNome.innerHTML = `<p onclick="window.location.href='./processo.html'" style="text-decoration: none; color: inherit; background-color: none;">${licitacao.nome}</p>`;
                celulaSetor.innerHTML = `<p onclick="window.location.href='./processo.html'" style="text-decoration: none; color: inherit; background-color: none;">${licitacao.setor}</p>`;
                celulaDataInicio.innerHTML = licitacao.dataini;
                celulaHorarioInicio.innerHTML = licitacao.horaini;
                celulaHorarioFim.innerHTML = licitacao.horafim;
            });
        })
        .catch(error => {
            console.error('Erro ao buscar dados da API:', error);
        });
}

// Chama a função mostrar quando a página carrega
window.onload = mostrar;