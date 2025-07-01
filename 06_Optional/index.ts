const fun = (nome: string, idade: number): string => {
    return "Nome:" + nome + ", Idade: " + idade;
}

console.log(fun("João", 30)); // deixa pois a função foi inicializada com os parâmetros nome e idade

const fun2 = (nome: string, idade?: number): string => { // o parâmetro idade é opcional
    if (idade) {
        return "Nome: " + nome + ", Idade: " + idade;
    }
    return "Nome: " + nome;
}
console.log(fun2("João", 30)); // deixa pois a função foi inicializada com os parâmetros nome e idade
console.log(fun2("João")); // deixa pois o parâmetro idade é opcional

const fun3 = (nome: string, idade: number, addr?: {rua: string, numero: number}): string => { // o parâmetro addr é opcional
    if (addr) {
        return "Nome: " + nome + ", Idade: " + idade + ", Endereço: " + addr.rua + ", " + addr.numero;
    }
    return "Nome: " + nome + ", Idade: " + idade;
}
console.log(fun3("João", 30, {rua: "Rua A", numero: 123})); // deixa pois a função foi inicializada com os parâmetros nome, idade e addr
console.log(fun3("João", 30)); // deixa pois o parâmetro addr é opcional