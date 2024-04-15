console.log("hola mundo")

// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum };