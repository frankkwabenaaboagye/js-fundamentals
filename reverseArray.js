
const reverseArray = (arr) => {

    let ans = [];
    for(const num of arr){
        ans.unshift(num);
    }
    return ans;
  
}






// When you're ready to test your code, uncomment the below and run:

const sentence = ['sense.','make', 'all', 'will', 'This'];

console.log(reverseArray(sentence)) 
// Should print ['This', 'will', 'all', 'make', 'sense.'];
