// enum é um aglutinador de tipos, ou seja, é um tipo que agrega outros tipos

enum Meses {
    JAN = 'Janeiro',
    FEV = 'Fevereiro',
    MAR = 'Março',
}

enum Dias {
    DOM = 'Domingo',
    SEG = 'Segunda-feira',
    TER = 'Terça-feira',
    QUA = 'Quarta-feira',
    QUI = 'Quinta-feira',
    SEX = 'Sexta-feira',
    SAB = 'Sábado',
}

const pessoa: {nome: string, idade: number, mesAniversario: Meses, diaAniversario: Dias} = {
    nome: 'João',
    idade: 30,
    mesAniversario: Meses.JAN,
    diaAniversario: Dias.SEG,
}

if(pessoa.diaAniversario === Dias.SEG) {
    console.log(`A pessoa ${pessoa.nome} faz aniversário na segunda-feira do mês de ${pessoa.mesAniversario}.`);
}