let multiplosSeis = (min, max) => {
    let output = 0;

    for (let i = min + 1; i < max; i++) {
        if (i % 6 == 0) {
            output++;
        }
    }

    return output;
}

let checaECalcula = () => {
    
    let valorMin = parseInt(document.getElementById("valorMinimo").value);
    let valorMax = parseInt(document.getElementById("valorMaximo").value);

    let resultado = multiplosSeis(valorMin, valorMax);

    if (valorMin !== 0 && valorMax !== 0) {

        document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;

    }

}

