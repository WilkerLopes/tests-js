const { sum } = require("../services/calculator");

it("testa soma de 2 + 2 = 4", () => {
    expect(sum(2, 2)).toBe(4);
});

it("testa soma de 2 + + = 4, validadno se caso for ppassado uma string", () => {
    expect(sum("2", "2")).toBe(4);
});

it("testa o validador de erros caso seja passado valores inválidos ", () => {
    expect(() => {
        sum("", 2);
    }).toThrowError();

    expect(() => {
        sum([2, 2]);
    }).toThrowError();

    expect(() => {
        sum({});
    }).toThrowError();

    expect(() => {
        sum();
    }).toThrowError();
});