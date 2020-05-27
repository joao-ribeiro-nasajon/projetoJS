/**
 * Desenha um quadro gerado pelo gerados de quadros na tela.
 * @public
 * @class
 * @constructs QuadrosDrawer
 */
class QuadrosDrawer {
    
    /**  
     * O gerador de quadros.
     * @private
     * @type {QuadrosModule}
     */
    #_module;

    constructor() {

        this.#_module = new QuadrosModule();

    }

    /** 
     * Desenha o bloco gerado pelo gerador de módulos no DOM.
     * @public
     * @method desenhaQuadros Desenha quadros
     * @returns {void} Sem retorno
     */ 
    desenhaQuadros = () => {

        document.getElementById("secaoIterativa").innerHTML = this.#_module.constroiQuadros();

    }

}