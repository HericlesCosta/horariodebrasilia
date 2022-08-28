const hora = document.getElementById("hora");
const minuto = document.getElementById("minuto");
const segundo = document.getElementById("segundo");
const dia = document.getElementById("dia");
const mes = document.getElementById("mes");
const ano = document.getElementById("ano");

function relogio() {
    let novaHora = new Date().getHours();
    let novoMinuto = new Date().getMinutes();
    let novoSegundo = new Date().getSeconds();

    novaHora = novaHora < 10 ? '0' + novaHora : novaHora;
    novoMinuto = novoMinuto < 10 ? '0' + novoMinuto : novoMinuto;
    novoSegundo = novoSegundo < 10 ? '0' + novoSegundo : novoSegundo;

    hora.innerText = novaHora;
    minuto.innerText = novoMinuto;
    segundo.innerText = novoSegundo;
    setTimeout(()=>{
    relogio()
    }, 1000);
};

relogio();

function dias() {
    let d = new Date().getDate();
    let m = new Date().getMonth()+1;
    let a = new Date().getFullYear();

    d = d < 10 ? '0' + d : d;
    m = m < 10 ? '0' + m : m;

    if (m == 1) {
        m = 'janeiro'
    } else if (m == 2) {
        m = 'fevereiro'
    } else if (m == 3) {
        m = 'março'
    } else if (m == 4) {
        m = 'abril'
    } else if (m == 5) {
        m = 'maio'
    } else if (m == 6) {
        m = 'junho'
    } else if (m == 7) {
        m = 'julho'
    } else if (m == 8) {
        m = 'agosto'
    } else if (m == 9) {
        m = 'setembro'
    } else if (m == 10) {
        m = 'outubro'
    } else if (m == 11) {
        m = 'novembro'
    } else if (m == 12) {
        m = 'dezembro'
    };

    dia.innerText = d;
    mes.innerText = m;
    ano.innerText = a;
};

dias();