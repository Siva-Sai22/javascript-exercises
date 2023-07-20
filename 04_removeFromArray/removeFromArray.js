const removeFromArray = function(array, ...num) {
    for(let i=0;i<num.length;i++){
        for(let j=0;j<array.length;j++){
            if(array[j]===num[i]){
                array.splice(j,1);
                break;
            }
        }
    }
    return array;
};

console.log(removeFromArray([1,2,3,4],3,4,5));

// Do not edit below this line
module.exports = removeFromArray;
