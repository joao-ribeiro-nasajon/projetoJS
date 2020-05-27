/**
 * Cria o moulo de geração de quadros.
 * @public
 * @class
 * @property {DelegadoRepository} #_delegadoRepo
 * @constructs QuadrosModule
 */
class QuadrosModule {

    /**
     * O repositório de funções.
     * @private
     * @type {DelegadoRepository}
     */
    #_delegadoRepo;

    constructor() {

        this.#_delegadoRepo = new DelegadoRepository();

    }

    /** 
     * Constrói template básico para a visualização do resultado da função.
     * @private
     * @method #constroiTemplateQuadroFuncao Constrói template quadro função
     * @param {string} funcTitle Título da função 
     * @param {string} result O resultado da função 
     * @returns {string} Cada elemento de visualização da função com o resultado 
     */
    #constroiTemplateQuadroFuncao = (funcTitle, result) =>
        `<div class="caixa caixa-output">
            <p>${funcTitle}</p>
            <p>${result}</p>
        </div>`;

    /**
     * Gera um quadro de uma função acessando o input do usuário.
     * @private
     * @method #geraQuadroFuncao Gera quadro função
     * @param {number} n Iteração do loop de geração
     * @returns {string} Gera uma caixa dado o input do user
     */
    #geraQuadroFuncao = n => {

        let resultTitle = this.#_delegadoRepo.delegate[n].titulo;

        let input = document.getElementById("numInput").value;

        let result = this.#_delegadoRepo.delegate[n].expressao(input);
        
        return this.#constroiTemplateQuadroFuncao(resultTitle, result);

    }

    /**
     * Encapsula cada grupo de 3 quadros em um div correspondente a uma linha.
     * @private
     * @method #encapsulaQuadrosEmLinhas - Encapsula quadros em linhas
     * @param {string[]} quadros Cada seção de 3 quadros
     * @returns {string} Os quadros concatenados em uma linha encapsulados por um div
     */
    #encapsulaQuadrosEmLinhas = quadros => "<div class='linha'>" + quadros.reduce((a, b) => '\n' + a + '\n' + b + '\n') + "</div>"; 

    /**
     * Constrói a string HTML de todos os quadros concatenados.
     * @public
     * @method constroiQuadros Constrói quadros
     * @returns {string} Os quadros concatenados em uma string
     */
    constroiQuadros = () => {
        
        let modulo = "";

        let quadros = [];

        for (let i = 0; i < this.#_delegadoRepo.length; i++) {

            let quadro = this.#geraQuadroFuncao(i);
            
            quadros.unshift(quadro);

            if((i + 1) % 3 === 0) {

                modulo = "\n" + this.#encapsulaQuadrosEmLinhas(quadros.slice(0, 3));
                quadros.push(modulo);
                quadros.splice(0, 3);

            }

        }

        let resto = this.#_delegadoRepo.length % 3;

        if (resto !== 0) {
            modulo = this.#encapsulaQuadrosEmLinhas(quadros.slice(0, resto));
            quadros.push(modulo);
            quadros.splice(0, resto);
        }

        return quadros.reduce((a, b) => '\n' + a + '\n' + b + '\n');

    }

}