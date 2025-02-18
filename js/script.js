let nome = document.getElementById('userName');
let email = document.getElementById('userEmail');
let telefone = document.getElementById('userTel');
let msgObt = document.getElementById('msgObt');
let mensagem = document.getElementById("userMsg");

emailjs.init('jprZzBBj2IeLFXCNo');

function VerificarCampos(event) {
  event.preventDefault();
  if (nome.value == '' || telefone.value == '' || email.value == '' || mensagem.value == '') {
    msgObt.innerText = "Preencha todos os campos!";
    msgObt.style.color = '#ff0000';
    msgObt.style.fontWeight = '600';
    msgObt.style.textAlign = 'center';
  } else {
    msgObt.innerText = "Formulário enviado!";
    msgObt.style.color = '#00ff00';
    msgObt.style.fontWeight = '600';
    msgObt.style.textAlign = 'center';
  }
};