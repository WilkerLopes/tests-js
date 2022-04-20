const { sum } = require("../services/calculator");

it("testa soma de 2 + 2 = 4", () => {
    expect(sum(2, 2)).toBe(4);
});