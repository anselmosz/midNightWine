let nome = document.getElementById('userName');
let email = document.getElementById('userEmail');
let telefone = document.getElementById('userTel');
let msgObt = document.getElementById('msgObt');

function VerificarCampos(event) {
  event.preventDefault();
  if (nome.value == '' || telefone.value == '' || email.value == '') {
    msgObt.innerText = "Preencha todos os campos!";
  } else if (nome.value != '' && telefone.value != '' && email.value != '') {
    msgObt.innerText = "Formulário enviado!";
  }
};