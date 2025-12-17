function sum_matrix(matrix: number[][]) {
	let s = 0;
	for(let i = 0 ; i < matrix.length; i++) {
	  for(let j = 0 ; j < matrix[i].length; j++) {
	    s += matrix[i][j];
	  }
	}
	return s;
}

function read_matrix(matrix: number[][]) {
  let currentPosition: number = 3;
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0 ; j < matrix[i].length; j++) {
	  matrix[i][j] = parseInt(process.argv[currentPosition++]);
	}
  }
}

function main() {
  let n: number = parseInt(process.argv[2]);
  let matrix: number[][] = Array.from(Array(n), () => new Array(n).fill(0));
  read_matrix(matrix);
  console.log(sum_matrix(matrix));
}

main();