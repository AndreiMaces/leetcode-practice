function longestCommonPrefix(strs: string[]): string {
    if(strs.length == 0) return "";
    if(strs.length == 1) return strs[0];
    let prefix = strs[0];
    for(let i = 1; i < strs.length; i++) {
        let newPrefix = "";
        for(let j = 0; j < strs[i].length; j++)
          if(strs[i][j] == prefix[j]) newPrefix += prefix[j];
          else break;
        prefix = newPrefix;
    }
    return prefix;
};


function main() {
  let strs = process.argv.slice(2);
  console.log(longestCommonPrefix(strs));
}

main();
