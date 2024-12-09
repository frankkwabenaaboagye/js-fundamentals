
const hasMoreThanRequired = (arr, c) => {
    let counter = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] === c){
            counter++;
            if(counter>=3){
                return false;
            }
        }
    }
    if(counter < 2){
        return false;
    }
    return true;
    
}

const subLength = (str, c) => {
    if(!hasMoreThanRequired(str, c)){
        return 0;
    }

    const arr = str.split('');

    let firstIndex = arr.findIndex((char)=>{
        return char === c;
    });

    let lastIndex = arr.findLastIndex((char)=>{
        return char === c;
    });

    return lastIndex - firstIndex + 1;


}

console.log(subLength('Saturday', 'a')); // returns 6
console.log(subLength('summer', 'm')); // returns 2
console.log(subLength('digitize', 'i')); // returns 0
console.log(subLength('cheesecake', 'k')); // returns 0