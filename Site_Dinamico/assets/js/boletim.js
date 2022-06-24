function calcular() {
    const boletim = document.getElementById('notas');
    const listaMaterias = boletim.getElementsByTagName('tr');

    for (let index = 0; index < listaMaterias.length; index++) {
        const materia = listaMaterias[index];
        const celulas = materia.getElementsByTagName('td');

        const soma = calcSoma(parseFloat(celulas[1].textContent),
            parseFloat(celulas[2].textContent),
            parseFloat(celulas[3].textContent),
            parseFloat(celulas[4].textContent));

        const media = calcMedia(parseFloat(celulas[1].textContent),
            parseFloat(celulas[2].textContent),
            parseFloat(celulas[3].textContent),
            parseFloat(celulas[4].textContent));

        celulas[5].textContent = soma.toLocaleString('pt-BR', {minimumFractionDigits: 2})

        celulas[6].textContent = media.toLocaleString('pt-BR', {minimumFractionDigits: 2})

        if (soma >= 60){
            celulas[7].textContent = 'APROVADO';
        }else{
            celulas[7].textContent = 'REPROVADO';
        }
    }
}

function calcSoma() {
    let total = 0;
    for (let cont = 0; cont < arguments.length; cont++) {
        if (typeof arguments[cont] === 'number') {
            total += arguments[cont];
        }
    }
    return total;
}

function calcMedia() {
    const total = calcSoma(arguments[0],arguments[1],arguments[2],arguments[3]);
    const resultado = total / arguments.length;
    return resultado;
}
