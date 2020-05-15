class MathDelegate {

    static quadrado = (n) => Math.pow(n, 2);

    static cubo = (n) => Math.pow(n, 3);

    static ePrimo = function (n) {
    
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return "Não";
        }

        return "Sim";

    }

    static fatorial = (n) => n === 0 || n === 1?
                                1 : n * fatorial(n - 1);

    static raiz = (n) => Math.sqrt(n);

    static parOuImpar = (n) => n % 2 === 0?
                                   "Par" : 'Ímpar';

}

class Generator {

    static #mathDel = [
        MathDelegate.quadrado,
        MathDelegate.cubo,
        MathDelegate.ePrimo,
        MathDelegate.fatorial,
        MathDelegate.raiz,
        MathDelegate.parOuImpar
    ];

    static #funcTitles = [
        "Quadrado",
        "Cubo",
        "É primo?",
        "Fatorial",
        "Raiz",
        "Par ou ímpar?"
    ];

    static gerarQuadroFuncao(n) {

        let resultTitle = Generator.#funcTitles[n];

        let input = document.getElementById("numInput").value;
        let result = Generator.#mathDel[n](input);
        document.getElementById("secaoIterativa").innerHTML = Generator.construirTemplateQuadroFuncao(resultTitle, result, n);

    }

    static constroiQuadros() {
        
        let quadros = [];

        for (let i = 0; i < 6; i++) {
            
            let quadro = this.gerarQuadroFuncao(i);
            
            quadros.push(quadro);

            if(i === 3 && i === 6) {
                this.encapsulaQuadrosEmSecoes(quadros);
                quadros = [];
            }
        }

    }

    static encapsulaQuadrosEmSecoes = (quadros) => "<div style='display: block;'>" + quadros.reduce((a, b) => '\n' + a + '\n' + b + '\n') + "</div>"; 

    static construirTemplateQuadroFuncao = (funcTitle, result) =>
        `<div class="caixa-input">
            <p>${funcTitle}</p>
            <p>${result}</p>
        </div>`;


}