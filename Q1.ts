// 1) Write a TypeScript program that checks if a given number is odd or even.

const isEven = (n: number) => {
    return n % 2 == 0;
};

let n = 5;
console.log(`${n}: ${isEven(n) ? "Even" : "Odd"}`);

n = 8;
console.log(`${n}: ${isEven(n) ? "Even" : "Odd"}`);

n = 11;
console.log(`${n}: ${isEven(n) ? "Even" : "Odd"}`);

n = 14;
console.log(`${n}: ${isEven(n) ? "Even" : "Odd"}`);
