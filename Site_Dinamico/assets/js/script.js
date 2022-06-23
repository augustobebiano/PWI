function calcular(){
    console.log('deu certo');

    const tabela = document.getElementById('notas');
    const materias = tabela.getElementsByTagName('tr');
    for(let index = 0; index < materias.length; index++){
        const materia = materias[index];
        const coluna = materia.getElementsByTagName('td');
        let sum = 0;
        console.log(coluna[0].textContent);
        for(let index3 = 1; index3  < 5; index3++){
            sum = sum + parseFloat(coluna[index3].textContent);
        }
        coluna[index2].textContent = sum;
        console.log(coluna[0].textContent);
    }
}