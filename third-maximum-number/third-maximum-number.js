/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let result = []
    
    for(i=0;i<nums.length;i++){
        if(!result.includes(nums[i])){
            result.push(nums[i])
        }
    }
     result.sort((a,b)=>b-a)

    if(result.length >= 3){
        return result[2]
    }else{
        return result[0]
    }

};