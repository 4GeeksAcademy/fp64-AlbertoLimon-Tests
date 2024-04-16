const { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js')

test("sumar 5 + 5 para dar 10", () => {
    const total = sum(5,5)

    expect(total).toBe(10);
})

test("5 dólares son 837,275 yenes", () => {

    const yenes = fromDollarToYen(5).toFixed(2)

    expect(yenes).toBe("837.28");
})

test("10 euros son 10,7 dolares", () => {
   
    const dolares = fromEuroToDollar(10).toFixed(1)

    expect(dolares).toBe("10.7");
})

test("2000 yenes son 14.68 libras", () => {
   
    const dolares = fromYenToPound(2000).toFixed(2)

    expect(dolares).toBe("14.69");
})