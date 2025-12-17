function isValid(s: string): boolean {
	let stack = [];

	for(let i = 0; i < s.length; i++) {
		if(s[i] == "(" || s[i] == "[" || s[i] == "{") stack.push(s[i]);
		else {
		  if(s[i] == ")") {
			if(stack[stack.length - 1] == '(') stack.pop();
			else return false;
		  }
		  if(s[i] == "]") {
			if(stack[stack.length - 1] == '[') stack.pop();
			else return false;
		  }
		  if(s[i] == "}") {
			if(stack[stack.length - 1] == '{') stack.pop();
			else return false;
		  }
		}
	}
	
	return stack.length == 0;
};

function main() {
  let input = process.argv[2];
  console.log(isValid(input));
}

main();