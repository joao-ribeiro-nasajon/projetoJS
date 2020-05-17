class StringUtils {

    static toCamelCase = titulo => titulo.split(' ')
                                         .map(word => word.normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
                                         .filter(n => n.match(/([a-zA-Z])/g))
                                         .map((word, i) => i != 0 ? word[0].toUpperCase() + word.substring(1) : word.toLowerCase())
                                         .reduce((a, b) => a + b);

}