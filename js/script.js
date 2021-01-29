const d = document,
range = d.querySelector('#range'),
price = d.querySelector('#price'),
billing = d.querySelector('#billing'),
$switch = d.querySelector('.slider'),
inputCheck = d.querySelector('input[type="checkbox"]');
let monthly = true;


d.addEventListener('DOMContentLoaded', estadoInicial);

$switch.addEventListener('click', e => {
  mostrarPrecioTotal(!monthly);
  monthly = !monthly;
});

range.addEventListener('input', e => {
  estadoInicial();
  mostrarPrecioTotal(monthly);
})

function mostrarPrecioTotal(monthly) {
  price.textContent = `$${calcularPrecioTotal(monthly)}`;
  billing.textContent = monthOrYear(monthly);
}

const monthOrYear = monthly => monthly ? '  /  month' : '  /  year';
const calcularPrecioTotal = monthly => monthly ? range.value : (range.value*12)-((range.value*12)*0.25);
function estadoInicial() {
  range.style.setProperty('--value', range.value);
  d.querySelector('.component-item > h5').textContent = `${range.value}K PAGEVIEWS`;
}