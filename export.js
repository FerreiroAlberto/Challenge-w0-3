/*
export function strictEquals2(a, b) {
  if (!a && !b) {
    return !Object.is(a, b);
  } else {
    return Object.is(a, b);
  }
}

strictEquals2();
*/

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
    return true;
  }

  return false;
}
