let n = parseInt(prompt('Ingrese un valor del 1 al 12:', ''));
let acumulador = n;
for (let i = 1; i <= 12; i++) {
    document.write(acumulador + ' ');
    acumulador = acumulador + n;
}