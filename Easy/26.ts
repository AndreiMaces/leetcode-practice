function removeDuplicates(nums: number[]): number {
    if(nums.length == 0) return 0;
    let lastNum = nums[0];
    let k = 1;
    for(let i = 1 ; i < nums.length; i++) {
        if(lastNum == nums[i]) {
            for(let j = i ; j < nums.length - 1; j++) nums[j] = nums[j + 1];
            i--;
            nums.pop();
        } else {
            lastNum = nums[i];
            k++;
        }
    }
    return k;
};

function main() {
  let nums = process.argv[2].split("").map(i => parseInt(i));
  console.log(removeDuplicates(nums), nums);
}

main();