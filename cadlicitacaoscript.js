const formulario = document.querySelector("form.insights");
const Bdnome = document.querySelector(".bdnome");
const Bdsetor= document.querySelector(".bdsetor");
const Bddescricao= document.querySelector(".bddesc");
const Bdinicio = document.querySelector(".bdinicio");
const Bdhorainicio = document.querySelector(".bdhorainicio");
const Bdhorafim = document.querySelector(".bdhorafim");

function cadastrar(){
  fetch("http://localhost:8080/usuario",
   {
      headers:{
        'Accept':'application/json',
        'Content-Type': 'application/json'
      },
      method:"POST",
      body:JSON.stringify({
        nome :Bdnome.value,
        setor :Bdsetor.value,
        dataini :Bdinicio.value,
        horaini :Bdhorainicio.value,
        horafim :Bdhorafim.value,
        descricao :Bddescricao.value
      })
    })
      .then(function(res){console.log(res)})
      .catch(function(res){console.log(res)})
};

function limpar(){
    Bdnome.value ="";
    Bdsetor.value ="";
    Bdinicio.value ="";
    Bdhorainicio.value ="";
    Bdhorafim.value ="";
    Bddescricao.value ="";
}

formulario.addEventListener('submit',function(event){
    event.preventDefault();
    cadastrar();
    limpar();
  });
  