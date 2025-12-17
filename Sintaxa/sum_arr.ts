function sum_arr(arr) {
  let s = 0;
  for(let i = 0; i < arr.length; i++)
	s += parseInt(arr[i]);
  return s;
}

function main() {
  let arr = process.argv.slice(2);
  console.log(sum_arr(arr));
}

main();