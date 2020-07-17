let contador = 0
let ctx = document.getElementById('myChart').getContext('2d');
let chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Luminosidade',
            backgroundColor: 'rgb(2, 84, 90)',
            borderColor: 'rgb(5, 135, 145)',
            fill: false,
            data: []
        }]
    },
    options: {}
});

function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}

function diaNoite(valor) {
    let cor = document.getElementById('hora').style
    let texto = document.getElementById('diaNoite')
    let corTexto = document.getElementById('diaNoite').style
    let image = document.getElementById('image')

    if (valor < 350) {
        cor.backgroundColor = 'rgb(21, 43, 102)'
        texto.innerHTML = 'Noite' 
        corTexto.color = 'rgb(229, 255, 0)'
        image.src = 'noite.png'
    } else {
        cor.backgroundColor = 'rgb(252, 252, 35)'
        texto.innerHTML = 'Dia'
        corTexto.color = 'rgb(255, 115, 0)'
        image.src = 'dia.png'
    }
}

let campo = document.getElementById('num')
let socket = io() // conecta automaticamente

let grafico = false
function plotaGrafico(){
    let botao = document.getElementById('botao')

    grafico = !grafico
    grafico == true ? botao.innerHTML = 'Parar' : botao.innerHTML = 'Retomar'
}

socket.on('dadoArduino', function(dado) {
    campo.removeChild(document.getElementById('estado'))
    const est = document.createElement('h2')
    est.setAttribute('id', 'estado')
    est.innerHTML = dado.valor
    campo.appendChild(est)

    if(grafico) {
        addData(chart, contador++, dado.valor)  
    }
    
    diaNoite(dado.valor)                 
})