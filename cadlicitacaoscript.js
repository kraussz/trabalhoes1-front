const formulario = document.querySelector("form.insights");
    const Bdnome = document.querySelector(".bdnome");
    const Bdsetor = document.querySelector(".bdsetor");
    const Bddescricao = document.querySelector(".bddesc");
    const Bdinicio = document.querySelector(".bdinicio");
    const Bdhorainicio = document.querySelector(".bdhorainicio");
    const Bdhorafim = document.querySelector(".bdhorafim");
    const toast = document.getElementById('toast');

    function cadastrar() {
      fetch("http://localhost:8080/usuario", {
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify({
              nome: Bdnome.value,
              setor: Bdsetor.value,
              dataini: Bdinicio.value,
              horaini: Bdhorainicio.value,
              horafim: Bdhorafim.value,
              descricao: Bddescricao.value
          })
      })
      .then(response => {
          if (!response.ok) {
              return response.json().then(errors => {
                  throw new Error(errors.join('\n'));
              });
          }
          return response.json().then(data => {
              showSuccessToast("Usuário cadastrado com sucesso!");
              console.log('Usuário cadastrado com sucesso:', data);
          });
      })
      .catch(error => {
          console.error('Erro:', error.message);
          showErrorToast(error.message);
      });
  };

    function limpar() {
        Bdnome.value = "";
        Bdsetor.value = "";
        Bdinicio.value = "";
        Bdhorainicio.value = "";
        Bdhorafim.value = "";
        Bddescricao.value = "";
    }

    function showNotification(message, isError = false) {
      toast.textContent = message;
      toast.classList.toggle('error', isError);
      toast.classList.add('show');
      setTimeout(() => {
          toast.classList.remove('show');
      }, 3000); // Exibe o toast por 3 segundos e depois o esconde
  }
  
  // Função para exibir mensagens de sucesso
  function showSuccessToast(message) {
      showNotification(message, false);
  }
  
  // Função para exibir mensagens de erro
  function showErrorToast(message) {
      showNotification(message, true);
  }

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();
        cadastrar();
        limpar();
    });