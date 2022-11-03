export function strictEquals(valor1, valor2) {
    if (Object.is(valor1, valor2)) {
        if (Object.is(valor1, NaN)) {
            return false;
        }
        return true;
    }
    if (Object.is(valor1, -0) && Object.is(0, valor2)) {
        return true;
    }
    if (Object.is(0, valor1) && Object.is(valor2, -0)) {
        return true;
    }
    return false;
}
