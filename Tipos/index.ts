let pedido1 = "Pizza";
pedido1 = 123; // não deixa pois a variável foi inicializada como string

let pedido2: string = "Pizza";
pedido2 = 123; // não deixa pois a variável foi inicializada como string

let deuBom: boolean = true;
deuBom = false; // deixa pois a variável foi inicializada como boolean
deuBom = 'false'; // não deixa pois a variável foi inicializada como boolean

const fun1 = (value: any) => { // não deixa compilar se não tiver o any
    return value;
}
fun1("Olá, mundo!"); // deixa pois a função aceita qualquer tipo de valor
fun1(123); // deixa pois a função aceita qualquer tipo de valor

const fun2 = (value: string) => {
    return value;
}
fun2("Olá, mundo!"); // deixa pois a função foi inicializada como string
fun2(123); // não deixa pois a função foi inicializada como string

const fun3 = (value: string | number): boolean => { // é possível determinar qual tipo de dado a função deve retornar também
    return true
}

fun3("Olá, mundo!"); // deixa pois a função aceita string ou number
fun3(123); // deixa pois a função aceita string ou number