// ====== Gráficas iniciales Chart.js ======

// Datos iniciales para el estado "Reposo"
const datosReposo = {
    labels: ['1s', '2s', '3s', '4s', '5s'],
    acelerometro: [0.1, 0.2, 0.15, 0.05, 0.1],
    giroscopio: [0.05, 0.1, 0.08, 0.06, 0.07]
};

// Configuración base de las gráficas
function crearGrafica(ctx, label, datos, color) {
    return new Chart(ctx, {
        type: 'line',
        data: {
            labels: datosReposo.labels,
            datasets: [
                {
                    label: label + ' X',
                    data: datos.map(v => v * 1.0),
                    borderColor: color,
                    tension: 0.3
                },
                {
                    label: label + ' Y',
                    data: datos.map(v => v * 0.8),
                    borderColor: 'orange',
                    tension: 0.3
                },
                {
                    label: label + ' Z',
                    data: datos.map(v => v * 1.2),
                    borderColor: 'green',
                    tension: 0.3
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: label
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Crear las dos gráficas
const ctxAcelerometro = document.getElementById('acelerometroChart').getContext('2d');
const ctxGiroscopio = document.getElementById('giroscopioChart').getContext('2d');

const graficaAcelerometro = crearGrafica(ctxAcelerometro, 'Acelerómetro', datosReposo.acelerometro, 'blue');
const graficaGiroscopio = crearGrafica(ctxGiroscopio, 'Giroscopio', datosReposo.giroscopio, 'red');

console.log("Gráficas inicializadas con estado 'Reposo'.");
