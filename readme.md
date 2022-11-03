## Challenge 4

### Función StrictEquals

Escribe en un módulo propio, una función llamada strictEquals(a, b) que devuelva el mismo valor que a === b. Tu implementación no puede usar los operadores ===, == ni !==.

Testea la función desde otro fichero con este set de pruebas:

Dada la función strictEquals
Cuando se comparan <A> y <B>
Entonces el resultado será <Result>

A B RESULT

1 1 true

NaN NaN false // Rule Exception

0 -0 true // Rule Exception

-0 0 true // Rule Exception

1 "1" false

true false false

false false true

"Water" "oil" false

Pasos a seguir:

-Creamos proyecto incluido ESLint (airbnb) y prettier

-Creamos el repo, protegemos la rama y añadimos husky

-Creamos la rama de trabajo:

-Mergeamos con PR
