class DelegadoRepository {

    /** @type {Function[]} */
    #_delegate;

    constructor() {
        
        let seed = [
            new FuncaoModel("Quadrado:", 'return n != 0 ? Math.pow(n, 2): 0;'),
            new FuncaoModel("Cubo:", 'return n != 0 ? Math.pow(n, 3): 0;'),
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
            new FuncaoModel("Raiz quadrada:", 'return n != 0 ? Math.sqrt(n) : 0;'),
            new FuncaoModel("Par ou ímpar?", 'return n % 2 == 0 || n == 0 ? "Par" : "Ímpar";')
        ];

        this.#_delegate = seed.map((f => Object.defineProperty()))
    }

    geraDelegadoInicial = del => this.#_delegate[this.#toCamelCase(del.titulo)] = del.expressao;    

    insereFuncaoNoDelegado = model => this.#_delegate[this.#toCamelCase(model.titulo)] = `return ${model.expressao};`;

}