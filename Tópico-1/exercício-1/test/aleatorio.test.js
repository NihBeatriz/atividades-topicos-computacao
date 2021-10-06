const { expect } = require("@jest/globals");
const aleatorio = require("../src/aleatorio")

describe('Gerar número aleatório' , () => {
    test('o início do intervalo é um valor negativo' , () => {
        const res = aleatorio(-10, 10)
        expect(res).toBe(-1);
    });

    test('o fim do intervalo é um valor negativo' , () => {
        const res = aleatorio(10, -10)
        expect(res).toBe(-1);
    });

    test('o início do intervalo é igual ao fim do intervalo' , () => {
        const res = aleatorio(10, 10)
        expect(res).toBe(-1);
    });

    test('um intervalo válido [200, 3000] é fornecido' , () => {
        const res = aleatorio(200, 300)
        expect(res).not.toBe(-1);
    });
});
