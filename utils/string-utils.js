/**
 * Contém uma série de métodos para tratamento de strings.
 * @public
 * @static
 * @class
 */
class StringUtils {

    /**
     * Reduz uma palavra em espaços, filtra ela por letras e números, e converte ela em camel case.
     * @static
     * @public
     * @method toCamelCase Transformar em camel case
     * @param {string} titulo A palavra para ser transformada
     * @returns {string} A string, filtrada para ser só letras simples e números, onde cada palavra depois da primeira tem sua primeira letra capitalizada
     */
    static toCamelCase = titulo => titulo.split(' ')
                                         .map(word => word.normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
                                         .filter(n => n.match(/[a-zA-Z]([a-zA-Z0-9])/g))
                                         .map((word, i) => i != 0 ? word[0].toUpperCase() + word.substring(1) : word.toLowerCase())
                                         .reduce((a, b) => a + b);

}