let array1: [string] = ["Pizza"]; // define um array com apenas um dado e seu tipo
// array1 = ["Hamburger", "Coca-Cola"]; // não consegue pois ele só definiu o tipo de dado da primeira entrada

let array2: [string, number] = ["Pizza", 123]; // define um array com dois dados e seus tipos

let array3: Array<string> = ["Pizza", "Hamburger", "Fries"]; // define um array com vários dados do mesmo tipo

let array4: Array<string | number> = ["Pizza", 123, "Hamburger"]; // define um array com vários dados de tipo string e/ou number, em qualquer ordem

let obj1 = {}; // funciona
let obj2: {} = {}; // também funciona
let obj3: {nome: string} = { // exige o campo nome
    nome: 'sophia',
    // idade: 18 // não deixa pois o campo idade não foi definido
};

let arrObj: Array<{nome: string, idade: number}> = [ // define um array de objetos com os campos nome e idade
    {nome: 'sophia', idade: 18},
    {nome: 'maria', idade: 20},
]