/**
 * Cria uma instância de uma lista de funções delegadas, e insere uma lista de funções básicas na construção da instância.
 * @public
 * @class
 * @property {FuncaoModel[]} #_delegate
 * @method delegate
 * @constructs DelegadoRepository
 */
class DelegadoRepository {

    /**
     * A lista de funções.
     * @private 
     * @type {FuncaoModel[]}
     */
    #_delegate;

    constructor() {
        
        this.#_delegate = [
            new FuncaoModel("Quadrado:", 'n != 0 ? Math.pow(n, 2): 0;'),
            new FuncaoModel("Cubo:", 'n != 0 ? Math.pow(n, 3): 0;'),
            new FuncaoModel("É primo?", `    
                if (n == 0 || n == 1) return 'Não';
        
                for (let i = 2; i <= Math.sqrt(n); i++) {
                    if (n % i == 0) return "Não";
                }
        
                return "Sim";
            `),
            new FuncaoModel("Fatorial:", `
                let i = 0;
    
                while (i < n) {
                    n *= i;
                    i++;
                }
    
                return n;
            `),
            new FuncaoModel("Raiz quadrada:", 'n != 0 ? Math.sqrt(n) : 0;'),
            new FuncaoModel("Par ou ímpar?", 'n % 2 == 0 || n == 0 ? "Par" : "Ímpar";')
        ];
        
    }

    /** 
     * Retorna a lista de funções.
     * @public
     * @method delegate
     * @returns {FuncaoModel[]} A lista de funções
     */
    get delegate() {
        return this.#_delegate;
    }

}