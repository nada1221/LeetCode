/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let sortH = [...heights].sort((a,b)=>a-b)
    let result = 0
    
    for(i=0;i<heights.length;i++){
        if(sortH[i] !== heights[i]){
            result ++
        }
            console.log(sortH,result,heights,sortH[i], heights[i])
    }

    return result
};