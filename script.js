function atualizar_tempo(){
   
    var display = document.querySelector(".display");
    var agora = new Date();
    var horario = corrigir_horario(agora.getHours()) + ':' + corrigir_horario(agora.getMinutes()) + ':' + corrigir_horario(agora.getSeconds());

    display.textContent = horario;
}

function corrigir_horario(numero){
    if(numero < 10){
        numero = '0' + numero;
    }
    return numero;
}

atualizar_tempo();
setInterval(atualizar_tempo, 1000);

console.log(horario);

