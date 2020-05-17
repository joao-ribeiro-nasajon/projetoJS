class QuadrosDrawer {
    
    /**  @type {QuadrosModule} */
    #_module;

    constructor() {

        this.#_module = new QuadrosModule();

    }

    desenhaQuadros = () => {

        document.getElementById("secaoIterativa").innerHTML = this.#_module.constroiQuadros();

    }

}