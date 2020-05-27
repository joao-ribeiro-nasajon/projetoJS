/**
 * O modelo para uma função inserida pelo usuário.
 * @public
 * @class
 * @property {string} titulo O título inserido pelo usuário
 * @property {Function} expressao A expressão inserida pelo usuário
 * @constructs FuncaoModel
 */
class FuncaoModel {

    /**
     * 
     * @private 
     * @type {string}
     */
    #_titulo;

    /**
     * A expressão inserida pelo usuário.
     * @private
     * @type {string}
     */
    #_expressao;

    /**
     * Constrói uma instância da classe FuncaoModel.
     * @param {string} titulo O título inserido pelo usuário 
     * @param {string} expressao A expressão inserida pelo usuário
     * @returns {FuncaoModel} Um objeto da classe FuncaoModel, com a expressão convertida para função.
     */
    constructor(titulo, expressao) {

        this.#_titulo = titulo;
        this.#_expressao = expressao;

    }

    /**
     * Captura o nome da função criada pelo usuário. 
     * @public
     * @method titulo
     * @returns {string} O título inserido pelo usuário
     */
    get titulo() {
        return this.#_titulo;
    }

    /**
     * Constrói uma função com return adicionado se o corpo do input se constituir de uma expressão simples.
     * @public
     * @method expressao
     * @returns {Function} A função construída a partir do input do usuário
     */
    get expressao() {
        return new Function('n', this.#_expressao.contains("return") ? this.#_expressao : "return " + this.#_expressao);
    }

}