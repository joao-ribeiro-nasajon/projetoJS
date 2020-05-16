class MathDelegate {

    static quadrado = (n) => n != 0 ? Math.pow(n, 2): 0;

    static cubo = (n) => n != 0 ? Math.pow(n, 3) : 0;

    static ePrimo = function (n) {
    
        if (n == 0 || n == 1) return "Não";

        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) return "Não";
        }

        return "Sim";

    }

    static fatorial = (n) => n == 0 || n == 1?
                                1 : n * MathDelegate.fatorial(n - 1);

    static raiz = (n) => n != 0 ? Math.sqrt(n) : 0;

    static parOuImpar = (n) => n % 2 == 0 || n == 0?
                                   "Par" : 'Ímpar';

}

class QuadrosFactory {

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

    static #constroiTemplateQuadroFuncao = (funcTitle, result) =>
        `<div class="caixa caixa-output">
            <p>${funcTitle}</p>
            <p>${result}</p>
        </div>`;

    static #geraQuadroFuncao = function (n) {

        let resultTitle = QuadrosFactory.#funcTitles[n];

        let input = document.getElementById("numInput").value;

        let result = QuadrosFactory.#mathDel[n](input);
        
        return QuadrosFactory.#constroiTemplateQuadroFuncao(resultTitle, result);

    }

    static #encapsulaQuadrosEmLinhas = (quadros) => "<div class='linha'>" + quadros.reduce((a, b) => '\n' + a + '\n' + b + '\n') + "</div>"; 

    static #constroiQuadros = function () {
        
        let output = "";

        let quadros = [];

        for (let i = 0; i < 6; i++) {
            
            let quadro = QuadrosFactory.#geraQuadroFuncao(i);
            
            quadros.push(quadro);

            if(i === 2 || i === 5) {

                output += "\n" + QuadrosFactory.#encapsulaQuadrosEmLinhas(quadros);
                quadros = [];

            }

        }

        return output;

    }

    static desenhaQuadros = function () {

        let quadrosConstruidos = QuadrosFactory.#constroiQuadros();
        document.getElementById("secaoIterativa").innerHTML = QuadrosFactory.#constroiQuadros();

    }

}