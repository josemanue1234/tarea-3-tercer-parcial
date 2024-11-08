let entrada = document.getElementById("Entrada");
let resultado = document.getElementById("Resultado");
const button = document.getElementById("Calcular");

function calcularPrestamo() {
    const monto = parseFloat(entrada.value);
    const porcentaje = parseFloat(document.getElementById("porcentaje").value);

    if (isNaN(monto) || monto <= 0) {
        resultado.textContent = "Ingresa un monto válido";
    } else {
        const resultadoPrestamo = monto * porcentaje;

        // Formatear el resultado en pesos mexicanos
        const formatoMXN = new Intl.NumberFormat('es-MX', {
            style: 'currency',
            currency: 'MXN',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(resultadoPrestamo);

        resultado.textContent = `El monto calculado es: ${formatoMXN}`;
    }
}

button.addEventListener("click", calcularPrestamo);
