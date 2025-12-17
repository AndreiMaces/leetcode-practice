function sum(a: number, b: number): number {
	return a + b;
}

let a = parseInt(process.argv[2]);
let b = parseInt(process.argv[3]);

console.log(sum(a, b));