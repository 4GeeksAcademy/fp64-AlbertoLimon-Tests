const { sum } = require('./app.js')

test("sumar 5 + 5 para dar 10", () => {
    const total = sum(5,5)

    expect(total).toBe(10);
})