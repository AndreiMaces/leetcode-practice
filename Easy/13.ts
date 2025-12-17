/* I 1
V 5
X 10
L 50
C 100
D 500
M 1000

IV 4
IX 9
XL 40
XC 90
CD 400
CM 900

LVIII => LV + II + I => L + V + I + I + 1 => 50 + 5 + 1 + 1 + 1 => 58

DCIX => IX + DC
DCXII => DC + X + I_

MCMXCIV => IV + XC + CM + M => 4 + ...


function romanToInt(roman: string) {
  if(roman.length == 1) {
    if(roman == "I") return 1;
	else if(roman == "V") return 5;
	else if(roman == "X") return 10;
	else if(roman == "L") return 50;
	else if(roman == "C") return 100;
	else if(roman == "D") return 500;
	else if(roman == "M") return 1000;
  } else if(roman.length == 2) {
    if(roman == "IV") return 4;
	else if(roman == "IX") return 9;
	else if(roman == "XL") return 40;
	else if(roman == "XC") return 90;
	else if(roman == "CD") return 400;
	else if(roman == "CM") return 900;
	else return romanToInt(roman[0]) + romanToInt(roman[1]);
  } else {
    let s = 0;
	if(roman.length % 2 == 0) {
	  for(let i = 0; i < roman.length; i += 2)
	    s += romanToInt(roman.slice(i, i + 2));
	} else {
	  for(let i = roman.length - 1 ; i > 0; i -= 2)
	    s += romanToInt(roman.slice(i - 2, i));
	    s += romanToInt(roman[0]);
	}
	return s;
  }
}
*/

function romanToInt(roman: string): number {
  const map: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let sum = 0;

  for (let i = 0; i < roman.length; i++) {
    const curr = map[roman[i]];
    const next = map[roman[i + 1]];

    if (next && curr < next) {
      sum -= curr;
    } else {
      sum += curr;
    }
  }

  return sum;
}

function main() {
  let r = process.argv[2];
  console.log(romanToInt(r));
}

main();