class FuncaoModel {

    /** @type {string} */
    #_titulo;

    /** @type {string} */
    #_expressao;

    /** @constructor */
    constructor(
                    /** @type {string} */
                    titulo,
                    
                    /** @type {string} */
                    expressao
                ) {

        this.#_titulo = titulo;
        this.#_expressao = expressao;

    }

    /** @returns {string} */
    get titulo() {
        return this.#_titulo;
    }

    /** @returns {string} */
    get expressao() {
        return new Function('n', this.#_expressao);
    }

}