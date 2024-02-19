//export function strictEquals2(a, b) {
// if (!a && !b) {
// return !Object.is(a, b);
//} else {
//return Object.is(a, b);
//}
//}

//strictEquals2();

export function strictEquals(a, b) {
  if (Object.is(a, NaN) && Object.is(NaN, b)) {
    return false;
  }
  if (
    (Object.is(a, 0) && Object.is(-0, b)) ||
    (Object.is(a, -0) && Object.is(0, b))
  ) {
    return true;
  }
  if (Object.is(a, b)) {
    //este código sobra, me está diciendo que si Object.is(a,b) devuelve true, me de (en el return, true), es innecesario
    return true;
  }

  return false;
}

// de la línea 21 a la 26 se puede sustituir por  return Object.is(a,b)

/* function strictBest (a,b) {
if (Object.is(a,NaN)) return false;
if (!a && !b) return true;
return Object.is(a,b);
}
*/
