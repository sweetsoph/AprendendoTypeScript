/*

CONCEITOS IMPORTANTES:

- Classes são moldes para criar objetos (instâncias).
- Classes podem ter propriedades (atributos) e métodos (funções).
- Classes, atributos e métodos podem ser públicas, privadas ou protegidas.
    - Públicas: acessíveis de qualquer lugar.
    - Protegidas: acessíveis apenas dentro da classe e suas subclasses.
    - Privadas: acessíveis apenas dentro da própria classe.
- Construtores são métodos especiais usados para inicializar objetos.
- Classes podem herdar de outras classes, permitindo reutilização de código (herança).
- Classes podem ser abstratas, o que significa que não podem ser instanciadas diretamente, mas podem ser estendidas por outras classes.
- Métodos podem ser abstratos, o que significa que não têm implementação na classe base, mas devem ser implementados nas subclasses (podem ser implementados de formas diferentes em cada)
- Interfaces definem contratos que classes podem implementar, garantindo que certas propriedades e métodos estejam presentes.
- Classes estáticas são usadas para definir propriedades e métodos que pertencem à classe em si, e não a instâncias específicas da classe.
*/

abstract class Pessoa {
    public nome: string;
    public idade: number;
    private readonly _cpf: string;
    
    constructor(nome: string, idade: number, cpf: string) {
        this.nome = nome;
        this.idade = idade;
        this._cpf = cpf;
    }

    // funções podem ser declaradas como públicas, privadas ou protegidas
    public get cpf(): string {
        return this._cpf;
    }

    // public set cpf(cpf: string) {
    //     // aqui podemos validar o CPF antes de atribuir
    //     const cpfFormatado = Utils.formatarCpf(cpf);
    //     this._cpf = cpfFormatado; // não podemos atribuir diretamente porque o atributo é readonly
    // }

    public abstract falar(): void; // se eu não definir aqui qual a encapsulação da função, ela será pública por padrão, e nas subclasses isso deve ser respeitado
}

class Homem extends Pessoa {

    public falar(): void {
        console.log(`${this.nome} está falando grosso.`);
    }
}

class Mulher extends Pessoa {
    public falar(): void {
        console.log(`${this.nome} está falando fino.`);
    }
}

class Utils {
    static formatarCpf(cpf: string): string {
        return cpf.replace(/\D/g, ''); // remove todos os caracteres que não são dígitos
    }
}

// Exemplo de uso
const homem = new Homem('João', 30, '123.456.789-00');
const mulher = new Mulher('Maria', 25, '987.654.321-00');

// const utils = new Utils();
// console.log(utils.formatarCpf(homem.cpf)); // 12345678900
console.log(Utils.formatarCpf(homem.cpf)); // 12345678900