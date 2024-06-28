AOS.init();

const dataDoEvento = new Date("Dec 14, 2024 10:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
const agora = new Date();
const timeStampAtual = agora.getTime();

const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

const dayForMs = 1000 * 60 * 60 * 24;
const hourForMs = 1000 * 60 * 60;
const minuteForMs = 1000 * 60;

const diasAteOEvento = Math.floor(distanciaAteOEvento / dayForMs);
const horasAteOEvento = Math.floor(distanciaAteOEvento % dayForMs / hourForMs);
const minutosAteOEvento = Math.floor(distanciaAteOEvento % hourForMs / minuteForMs);
const segundosAteOEvento = Math.floor(distanciaAteOEvento % minuteForMs / 1000);

/*console.log(diasAteOEvento);
console.log(horasAteOEvento);
console.log(minutosAteOEvento);
console.log(segundosAteOEvento);
*/

document.getElementById("contador").innerHTML =`${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

if(distanciaAteOEvento < 0){
    clearInterval(contaAsHoras);
    document.getElementById("contador").innerHTML = "Finalizado"
}

}, 1000);