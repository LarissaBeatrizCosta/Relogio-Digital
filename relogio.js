$(() => {
    const horario = {
        horas: $("#horas"),
        minutos: $("#minutos"),
        segundos: $("#segundos")
    };

    const relogio = setInterval(() => {
        let dataAtual = new Date();
        let hora = dataAtual.getHours();
        let minuto = dataAtual.getMinutes();
        let segundo = dataAtual.getSeconds();

        hora = hora < 10 ? '0' + hora : hora;
        minuto = minuto < 10 ? '0' + minuto : minuto;
        segundo = segundo < 10 ? '0' + segundo : segundo;

        horario.horas.text(hora);
        horario.minutos.text(minuto);
        horario.segundos.text(segundo);
    }, 1000);

});