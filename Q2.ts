// 2) Write a TypeScript program that finds the maximum of three numbers.

const max = (a: number, b: number, c: number) => {
    let max = a;

    if (b > a) max = b;
    if (c > max) max = c;

    return max;
};

let a = 10;
let b = 7;
let c = 13;
console.log(`${a}, ${b}, ${c}: ${max(a, b, c)}`);

a = 116;
b = 15;
c = 78;
console.log(`${a}, ${b}, ${c}: ${max(a, b, c)}`);

a = 126;
b = 746;
c = 678;
console.log(`${a}, ${b}, ${c}: ${max(a, b, c)}`);
