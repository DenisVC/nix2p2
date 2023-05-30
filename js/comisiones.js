const button = document.querySelector("#calculate_btn"); // Declaramos botón
let depositMoney = document.querySelector("#depositmoney"); // Dinero depositado
let getMoney = document.querySelector("#getmoney"); // Dinero que recibe el user
let porcentaje = 20; // Porcentaje a elegir de comisión.

button.onclick = function () {
  let comision = (depositMoney.value * porcentaje) / 100;
  let total = depositMoney.value - comision;
  getMoney.value = total + "€";
};
