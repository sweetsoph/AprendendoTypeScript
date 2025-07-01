const error = (): never => { // utilziado para indicar que a função nunca retorna um valor pois nunca termina sua execução, por exemplo, quando lança um erro
  throw new Error('This is an error');
}

const validate = (value: any) => {
    if (typeof value !== 'string') {
        console.log(error());
    }
    console.log(value);
}

validate(123); // deixa pois a função aceita qualquer tipo de valor, mas lança um erro pois o valor não é uma string