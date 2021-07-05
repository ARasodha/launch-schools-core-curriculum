import { foo } from './foo';
import { bar, getCounter, items, counter } from './bar';

foo();
console.log(items);          // ["item 1"]
console.log(getCounter());   // 1
console.log(counter);        // 1

bar();
console.log(items);          // ["item 1", "item 2"]
console.log(getCounter());   // 2
console.log(counter);        // 2