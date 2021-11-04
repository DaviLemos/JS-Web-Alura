var botaoAdicionar = document.querySelector('#buscar-pacientes');

botaoAdicionar.addEventListener('click', function () {
  var xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacisdasentes');

  xhr.addEventListener('load', function () {
    if (this.status == 200) {
      document.querySelector('#erro-ajax').classList.add('invisivel');
      var resposta = xhr.responseText;
      var pacientes = JSON.parse(resposta);
      pacientes.forEach(function (paciente) {
        adicionaPacienteNaTabela(paciente);
      });
    } else {
      // alert(this.status + ': ' + this.responseText);
      document.querySelector('#erro-ajax').classList.remove('invisivel');
    }
  });

  xhr.send();
});
