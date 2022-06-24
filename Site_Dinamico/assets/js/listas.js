function exemploListas(){
    vogais = ['a', 'e', 'i', 'o', 'u'];
    console.log('original: ', vogais);

    vogais.push('r');
    console.log('adicionar no final: ', vogais);

    vogais.pop();
    console.log('remover o último: ', vogais);

    vogais.unshift('9');
    console.log('adicionar no começo: ', vogais);

    vogais.shift();
    console.log('remover o primeiro: ', vogais);

    delete vogais[2];
    console.log('remover a posição n: ', vogais);

    vogais[2] = 'i';
    console.log('adicionar na posição n: ', vogais);

    const todos = vogais.join(', ');
    console.log('une os elementos de uma lista: ', todos);

    let vog = vogais.slice(0,2);
    let ais = vogais.slice(2,5);
    console.log('partir uma lista: ', vog);

    const vogais2 = vog.concat(ais);
    console.log('concatenar dois arrays: ', vogais2);

    console.log('desestruturar arrays: ', ...vog, ...ais);

    const numeros = [12, 3, 7, 14, 6, 2, 18, 21];
    const filtrar = numeros.filter((valor, index, array) => { return (valor > 10); });
    console.log('filtrar os elementos de uma lista (1): ', filtrar);

    const filtrar2 = numeros.filter(valor =>  valor > 10 );
    console.log('filtrar os elementos de uma lista (2): ', filtrar2);

    const numnormal = ['1', '2', '3', '4', '5'];
    const numdobro = numnormal.map( item => item * 2);
    console.log('modificar os elementos de uma lista: ', numdobro);

    const numstring = ['1', '2', '3', '4', '5'];
    let sum = 0;
    for (let cont = 0; cont < numstring.length; cont++) {
        sum += numstring[cont];
    }
    console.log('exemplo de soma sem map: ', sum);

    sum = 0;
    const numfloat = numstring.map(item => parseFloat(item));
    for (let cont = 0; cont < numstring.length; cont++) {
        sum += numfloat[cont];
    }
    console.log('exemplo de soma com map: ', sum);

    const numeros2 = [12, 3, 7, 14, 6, 2, 18, 21];
    const reduzir = numeros2.reduce((acumulador, valor))
    for (let index = 0; index < listaNumeros.length; index++) {
        soma += listaNumeros[index];
    }
    console.log('Soma:',soma);

    vogais.forEach((value, index, array) => { console.log(value); });
} 