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

    /*
    
    더 빠른 풀이
    
    // 중복 제거 및 정렬
    let uniqueNums = Array.from(new Set(nums));
    
    // 내림차순 정렬
    uniqueNums.sort((a, b) => b - a);
    
    // 세 번째로 큰 값이 있으면 반환, 없으면 최대값 반환
    if (uniqueNums.length >= 3) {
        return uniqueNums[2];
    } else {
        return uniqueNums[0];
    }
    */
};