function mostrarPagina(id) {
  document.querySelectorAll('.pagina').forEach(p => p.classList.remove('ativa'));
  document.getElementById(id).classList.add('ativa');
}

function calcularPiscina() {
  let litros = document.getElementById('litrosPiscina').value;
  let cloro = litros * 0.004;
  let algicida = litros * 0.002;

  document.getElementById('resultadoPiscina').innerHTML =
    'Cloro: ' + cloro.toFixed(2) + ' g<br>Algicida: ' + algicida.toFixed(2) + ' ml';
}

function calcularDiluicao() {
  let agua = document.getElementById('agua').value;
  let proporcao = document.getElementById('proporcao').value;
  let produto = agua / proporcao;

  document.getElementById('resultadoDiluicao').innerHTML =
    'Produto necessário: ' + produto.toFixed(2) + ' L';
}
