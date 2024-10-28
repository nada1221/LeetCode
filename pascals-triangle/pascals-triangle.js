/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = [1,1]
    let count = 3
    let arrays = [[1],[1,1]]
    
    if(numRows===1){
        return [[1]]
    }else if(numRows===2){
        return [[1],[1,1]] 
    }

     while(numRows>=count){
        let newResult = []
                 console.log(result)
        for(let i=0;i<count;i++){
            if(i===0||i===count-1){
                newResult.push(1)
            }else if(i!==0||i!==count-1){
                newResult.push(result[i]+result[i-1])
            }
        }
        result = newResult
        arrays.push(result)
         count++
    }   
        return arrays
};