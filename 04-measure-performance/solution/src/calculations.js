let count = 5;

export function sometimesSlowCalculation() {
  count++;
  if (count % 5 === 0) {
    const foo = new Array(20000000);
    foo.forEach(() => Math.random());
  }
}

export function slowCalculation() {
  const foo = new Array(20000000);
  foo.forEach(() => Math.random());
}

export function slightlySlowCalculation() {
  const foo = new Array(200000);
  foo.forEach(() => Math.random());
}
