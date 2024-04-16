console.log("hola mundo")

// Esta es mi función que suma dos números

const sum = (a,b) => {
    return a + b
}

const euro = {
    "JPY":156.5,
    "USD":1.07,
    "GBP":0.87,
}

const fromDollarToYen = (quantity) => {
    return (quantity * euro.USD) * euro.JPY;
}

const fromEuroToDollar = (quantity) => {
    return quantity * euro.USD;
}

const fromYenToPound = (quantity) => {
    return (quantity / euro.JPY) / euro.GBP;
}

// Exporta la función para usarla en otros archivos 
module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound };