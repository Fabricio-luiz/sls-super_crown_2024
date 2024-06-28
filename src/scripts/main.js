AOS.init();

const dataDoEvento = new Date("Dec 14, 2024 10:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
const agora = new Date();
const timeStampAtual = agora.getTime();

const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

const diasAteOEvento = Math.floor(distanciaAteOEvento / (1000 * 60 * 60 * 24));
const horasAteOEvento = Math.floor((distanciaAteOEvento % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutosAteOEvento = Math.floor((distanciaAteOEvento % (1000 * 60 * 60)) / (1000 * 60));
const segundosAteOEvento = Math.floor((distanciaAteOEvento % (1000 * 60)) / 1000);

console.log(diasAteOEvento);
console.log(horasAteOEvento);
console.log(minutosAteOEvento);
console.log(segundosAteOEvento);

document.getElementById("contador").innerHTML =`${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

}, 1000);