function sum(a: number, b: number): number {
	return a + b;
}

let a = parseInt(process.env[1]);
let b = parseInt(process.env[2]);

console.log(sum(a, b));