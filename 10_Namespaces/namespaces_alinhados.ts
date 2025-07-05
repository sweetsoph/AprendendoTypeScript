namespace Pessoas {
    export namespace Pessoa {
        export let nome = 'João';

        export function idade(): number {
            return 30;
        }
    }

    export namespace Funcionario {
        export let nome = 'Maria';

        export function idade(): number {
            return 25;
        }
    }
}

console.log(Pessoas.Pessoa.nome);
console.log(Pessoas.Funcionario.idade());