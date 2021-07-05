export let items = [];
export let counter = 0;

export function bar() {
  count += 1;
  items.push(`item ${counter}`);
}

export function getCounter() {
  return counter;
}