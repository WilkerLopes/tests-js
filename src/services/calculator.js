module.exports.sum = (num1, num2) => {
    var aux1 = parseInt(num1),
        aux2 = parseInt(num2);

    if (Number.isNaN(aux1) || Number.isNaN(aux2)) throw new Error("Valores inválidos, verifique se os valores passados estão coprretos.");

    return aux1 + aux2;
};