/*

Write a function, howOld(), that has two number parameters, age and year, and returns how old someone who is currently that age was (or will be) during that year. Handle three different cases:

If the year is in the future, you should return a string in the following format:
'You will be [calculated age] in the year [year passed in]'

If the year is before they were born, you should return a string in the following format:
'The year [year passed in] was [calculated number of years] years before you were born'

If the year is in the past but not before the person was born, you should return a string in the following format:
'You were [calculated age] in the year [year passed in]'

*/

// Write your function here:

const howOld = (age, year) => {
  const currentYear = 2024;
  let yearOfBirth  = currentYear - age;
  // future case
  if(year > currentYear){
    let calculatedAge = year - currentYear + age;
    return `You will be ${calculatedAge} in the year ${year}`;
  }
  if(year < yearOfBirth){
    let calculatedAge = yearOfBirth - year;
    return `The year ${year} was ${calculatedAge} years before you were born`;
  }
  if((year <= currentYear) && (year >= yearOfBirth)){
    let calculatedAge = year - yearOfBirth;
    return `You were ${calculatedAge} in the year ${year}`;
  }
}

// Once your function is written, write function calls to test your code!
console.log(howOld(24, 2015));
