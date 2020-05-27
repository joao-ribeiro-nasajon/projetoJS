let fatorialTemporizado = (n) => {

    let start = Date.now();

    let count = n - 1;
    while (count > 0) {
        n *= count--;
    }

    let finish = Date.now() - start;
    
    return {
        fatorial: n,
        tempo: finish
    };

}

let escreverFatorialTemporizado = () => {

    let n = document.getElementById("fatorial").value;

    if (n != 0) {

        let objResultado = fatorialTemporizado(n);
        document.getElementById("resultado").innerHTML = `${n}! = ${objResultado.fatorial} (${objResultado.tempo} milisegundos)`;

    }
    
}