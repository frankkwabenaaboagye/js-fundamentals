/*
Whale Talk
Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.

There are a few simple rules for translating text to whale language:

There are no consonants. Only vowels excluding “y”.
The u‘s and e‘s are extra long, so we must double them in our program.
Once we have converted text to the whale language, the result is sung slowly, as is a custom in the ocean.
*/
let input = "turpentine and turtles"; //  the text you want to translate into “whale talk”.
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = []; // to store the vowels from the input string

for(let i=0; i < input.length; i++){
  if(input[i] === 'e' || input[i] === 'u'){
    resultArray.push(input[i]);
  }
  for(let v=0; v < vowels.length; v++){
    if(input[i] === vowels[v] ){
      resultArray.push(input[i]);
    }
  }
}

console.log(resultArray);
let resultString = resultArray.join('').toUpperCase();
console.log(resultString)
