/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {

    let jj = []
    let tt = []

    
    for(i=0; i< nums.length;i++){
        if(nums[i] % 2 == 0){
            jj.push(nums[i])
        }else{
            tt.push(nums[i])
        }
    }
    
    return [...jj,...tt]
};