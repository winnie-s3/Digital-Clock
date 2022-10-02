// ------------ Configurando o horário e suas respectivas cores/ícones ------------

const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hour = dateToday.getHours();
    let minute = dateToday.getMinutes();
    let seconds = dateToday.getSeconds();

//  Adicionando um 0 para ficar no formato 00:00:00 ao invés de 0:0:0

    if (hour < 10){
        hour = '0' + hour;
    }

    if (minute < 10){
        minute = '0' + minute;
    }
    if (seconds < 10){
        seconds = '0' + seconds;
    }

    horas.textContent = hour;
    minutos.textContent = minute;
    segundos.textContent = seconds;

//  Mudando o fundo/ícone a partir de certo horário

    if (hour >= 0 && hour < 5) {  // Madrugada

        document.body.style.background = "linear-gradient(120deg, rgb(42, 14, 78),rgb(7, 0, 49))";
        document.getElementById("icon-img").src="img/lua.png";
    
    }else if (hour >= 5 && hour < 12) { // Manhã
    
        document.body.style.background = "linear-gradient(120deg, rgb(133, 247, 255), rgb(255, 165, 106))";
        document.getElementById("icon-img").src="img/sol.png";
    
    }else if (hour >= 12 && hour < 18) { // Tarde
    
        document.body.style.background = "linear-gradient(120deg, rgb(255, 149, 78), rgb(255, 148, 184))";
        document.getElementById("icon-img").src="img/sol.png";
    
    }else if (hour >= 18 && hour < 21) { // Noite
    
        document.body.style.background = "linear-gradient(120deg, #ff6123, rgb(0, 8, 119))";
        document.getElementById("icon-img").src="img/lua.png";
        
    }else if (hour >= 21) { // Noite/Madrugada
    
        document.body.style.background = "linear-gradient(120deg, #004911, rgb(51, 0, 109))";
        document.getElementById("icon-img").src="img/lua.png";
        
    }

// ------------ Configurando idiomas ------------
    

    if(document.getElementById('idiomas').value == "pt-BR") {
        document.getElementById('h').textContent = "Horas"
        document.getElementById('m').textContent = "Minutos"
        document.getElementById('s').textContent = "Segundos"
    }
    else if(document.getElementById('idiomas').value == "en-US") {
        document.getElementById('h').textContent = "Hours"
        document.getElementById('m').textContent = "Minutes"
        document.getElementById('s').textContent = "Seconds"
    }
    else if(document.getElementById('idiomas').value == "es") {
        document.getElementById('h').textContent = "Horas"
        document.getElementById('m').textContent = "Minutos"
        document.getElementById('s').textContent = "Segundos"
    }
    else if(document.getElementById('idiomas').value == "fr") {
        document.getElementById('h').textContent = "Heures"
        document.getElementById('m').textContent = "Minutes"
        document.getElementById('s').textContent = "Secondes"
    }

    
})