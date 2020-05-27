class Aluno {

    static #_nrCount = 0;

    constructor () {
        this.nota = Math.ceil(Math.random() * 100);

        this.nr = ++Aluno.#_nrCount;

        this.aprovado = this.nota > 50;
    }

}