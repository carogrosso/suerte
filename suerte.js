let nombre = document.getElementById("nombre");
let boton = document.getElementById("generar-suerte");
let suerte = document.getElementById("suerte");
let verPersonas = document.getElementById("ver-personas");
let personas = document.getElementById("personas");
let reiniciar = document.getElementById("reiniciar")
let titper = document.getElementById("titper")

const frasesDeSuerte = [
  "Buena suerte en tu camino.",
  "La suerte está de tu lado.",
  "Que la fortuna te acompañe.",
  "Hoy es tu día de suerte.",
  "Atrapa esa oportunidad, la suerte está contigo.",
  "Eres más afortunado de lo que crees.",
  "La suerte sonríe a los valientes.",
  "Confía en tu suerte y sigue adelante.",
  "El universo conspira a tu favor.",
  "Tu suerte está escrita en las estrellas.",
  "Un golpe de suerte puede cambiarlo todo.",
  "Que la suerte sea tu mejor aliada.",
  "Todo llega a quien sabe esperar, incluso la suerte.",
  "Suerte para empezar algo nuevo.",
  "La fortuna favorece a los audaces.",
  "La buena suerte está en los detalles.",
  "Hoy brillas con suerte propia.",
  "La suerte llama a quien trabaja duro.",
  "Haz espacio para que la suerte entre en tu vida.",
  "Que la buena fortuna ilumine tu día.",
  "La suerte llega cuando menos lo esperas.",
  "Confía en el poder de la casualidad.",
  "Algo bueno está por suceder.",
  "La suerte te está buscando.",
  "El azar está de tu lado.",
  "Abre los brazos a las sorpresas del destino.",
  "Todo lo bueno está por venir.",
  "Que cada paso sea guiado por la suerte.",
  "La suerte es un regalo inesperado.",
  "Tu esfuerzo está siendo premiado con fortuna.",
  "Aprovecha este momento de suerte.",
  "La suerte toca tu puerta hoy.",
  "Cada día trae su propia suerte.",
  "Tu perseverancia se convierte en suerte.",
  "El viento sopla a tu favor.",
  "Un rayo de suerte te ilumina.",
  "Hoy estás destinado a ganar.",
  "La fortuna te sonríe desde lejos.",
  "Que la suerte fluya en tu vida.",
  "No subestimes el poder de la buena fortuna.",
  "La suerte te acompaña siempre.",
  "Tu estrella de la suerte está brillando fuerte.",
  "El destino tiene un buen plan para ti.",
  "Hay magia de suerte en el aire.",
  "Es tu momento de brillar con suerte.",
  "La fortuna es amiga de los atrevidos.",
  "Recuerda que hoy es un día especial.",
  "Tu suerte es contagiosa, ¡compártela!",
  "El universo tiene grandes sorpresas para ti.",
  "Un pequeño gesto de suerte cambiará tu vida.",
  "La buena fortuna nunca pasa desapercibida.",
  "Tu esfuerzo y suerte se combinan a la perfección.",
  "Confía, hoy estás en el lado ganador.",
  "La suerte te está guiando a nuevas oportunidades.",
  "La fortuna está escrita en tu destino.",
  "Hoy es el comienzo de algo grandioso.",
  "La suerte está a la vuelta de la esquina.",
  "La suerte siempre está en movimiento.",
  "La buena fortuna te sigue como una sombra.",
  "Todo lo que tocas se convierte en suerte.",
  "Hoy todo saldrá a tu favor.",
  "La suerte brilla en cada rincón de tu vida.",
  "Un nuevo camino lleno de fortuna te espera.",
  "El azar está de tu lado, aprovéchalo.",
  "Tu estrella guía está iluminando tu suerte.",
  "Haz que la suerte te encuentre trabajando.",
  "Hoy atraerás toda la buena energía.",
  "La suerte está en los ojos del observador.",
  "Tus sueños están llenos de fortuna.",
  "Hoy es un día lleno de bendiciones.",
  "La suerte es el mejor aliado de los soñadores.",
  "Hoy todo conspira para que tengas éxito.",
  "La fortuna está en tus manos.",
  "Tu suerte hoy es imparable.",
  "Cada decisión trae un toque de suerte.",
  "La buena fortuna está presente en tu sonrisa.",
  "La suerte es el puente hacia tus metas.",
  "El azar te ha elegido hoy.",
  "Hoy las estrellas están alineadas para ti.",
  "La suerte no tiene límites en tu camino.",
  "Es tu momento de recibir lo inesperado.",
  "Tu aura está cargada de buena fortuna.",
  "Que cada paso esté lleno de suerte.",
  "Hoy todo está a tu favor.",
  "La suerte siempre está contigo, confía en ella.",
  "Hoy atraes lo bueno con solo pensarlo.",
  "La fortuna recompensa a los constantes.",
  "Una cadena de suerte te rodea.",
  "Sigue tu intuición, la suerte está ahí.",
  "El destino tiene sorpresas afortunadas para ti.",
  "Tu día está lleno de momentos de suerte.",
  "La suerte hoy es un regalo para ti.",
  "Las cosas buenas llegan a quien confía.",
  "La fortuna es tu aliada en el viaje.",
  "Hoy la magia está de tu lado.",
  "Sigue adelante, tu buena suerte está esperando.",
  "Tu energía positiva atrae fortuna.",
];

let arrayPersonas = [];

let echarSuerte = () => {
  let dato = nombre.value;
  if (nombre.value == ""){
    alert("Ingresa tu nombre")
  }else {
    suerte.innerHTML = "Hola " + dato + ".<br></br>" + frasesDeSuerte[dato.length];

  let obj = { nombre: dato, suerte: frasesDeSuerte[dato.length] };

  arrayPersonas.push(obj);
  nombre.value = "";
  }
  
};

boton.addEventListener("click", echarSuerte);

verPersonas.addEventListener("click", () => {
  
  if (arrayPersonas.length === 0){
    personas.innerHTML = "Nadie preguntó su suerte aún"
  } else {
    titper.innerHTML = "Suertes anteriores:";
    personas.innerHTML = arrayPersonas
    .map(
      (persona) => `<p>Nombre: ${persona.nombre}, Suerte: ${persona.suerte}</p>`
    )
    .join("");
  }
  
});

boton.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    echarSuerte();
  }
});

reiniciar.addEventListener("click", ()=>{
  location.reload()
})