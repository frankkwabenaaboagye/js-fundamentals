// Write function below

function groceries(arr) {
    if(arr.length === 1){
      return arr[0]['item'];
    }
    if(arr.length === 2){
      return arr[0]['item'] + " and " + arr[1]['item'];
    }
  
    let result = []
    for(let i=0; i<arr.length-1; i++){
      result.push(arr[i]['item']);
    }

    result = result.join(", ")
  
    return result + " and " +  arr[arr.length-1]['item'];
  
  }
  
  
  console.log(groceries([{item: 'Lettuce'}, {item: 'Onions'}, {item: 'Tomatoes'}]));
  // returns 'Carrots, Hummus, Pesto and Rigatoni'
  
  groceries( [{item: 'Bread'}, {item: 'Butter'}] );
  // returns 'Bread and Butter'
  
  groceries( [{item: 'Cheese Balls'}] );
  // returns 'Cheese Balls'