// síntaxe de um objeto:
// um objeto é uma coleção dinâmica de chave e valor!
// é possível adicionar ou remover um valor.

class Pessoa {
    // classe é a definição;
    // instância é a ocorrência;
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever() {
        console.log(`meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const cami = new Pessoa('cami', 25);

console.log(cami);

// uma função dentro de um objeto é chamada de método!