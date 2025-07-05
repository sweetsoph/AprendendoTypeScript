/*
Interfaces são contratos que definem a estrutura de um objeto.
Elas permitem que você defina quais propriedades e métodos um objeto deve ter, sem especificar como esses métodos são implementados.
Interfaces são úteis para garantir que diferentes partes do código estejam de acordo com uma estrutura específica, facilitando a manutenção e a legibilidade do código.
*/

interface IPessoa {
    nome: string;
    idade: number;
    readonly cpf: string;
    enabled(): boolean;
}

// Implementando a interface em um objeto
let pessoa: IPessoa = {
    nome: 'João',
    idade: 30,
    cpf: '123.456.789-00',
    enabled: function (): boolean {
        return true;
    }
};

// Implementando a interface em uma classe
class Funcionario implements IPessoa {
    nome: string;
    idade: number;
    readonly cpf: string;

    constructor(nome: string, idade: number, cpf: string) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }

    enabled(): boolean {
        return true;
    }
}