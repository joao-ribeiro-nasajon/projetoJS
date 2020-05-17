class QuadrosModule {

    /** @type {DelegadoRepository} */
    #_delegadoRepo;

    constructor() {

        

    }

    #constroiTemplateQuadroFuncao = (funcTitle, result) =>
        `<div class="caixa caixa-output">
            <p>${funcTitle}</p>
            <p>${result}</p>
        </div>`;

    #geraQuadroFuncao = n => {

        let resultTitle = this.#_delegadoRepo.#_delegate[n].titulo;

        let input = document.getElementById("numInput").value;

        let result = this.#_delegadoRepo.#_delegate[n].expressao(input);
        
        return this.#constroiTemplateQuadroFuncao(resultTitle, result);

    }

    #encapsulaQuadrosEmLinhas = quadros => "<div class='linha'>" + quadros.reduce((a, b) => '\n' + a + '\n' + b + '\n') + "</div>"; 

    constroiQuadros = () => {
        
        let output = "";

        let quadros = [];

        let chaves = Array.keys(this.#_delegadoRepo);

        for (let i = 0; i < this.#_delegadoRepo.length; i++) {

            let quadro = this.#geraQuadroFuncao(chaves[i]);
            
            quadros.unshift(quadro);

            if((i + 1) % 3 === 0) {

                output += "\n" + this.#encapsulaQuadrosEmLinhas(quadros.slice(0, 3));
                quadros.push(output);
                quadros.splice(0, 3);

            }

        }

        return quadros.reduce((a, b) => '\n' + a + '\n' + b + '\n');

    }

}