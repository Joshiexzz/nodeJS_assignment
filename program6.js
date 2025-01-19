let numbers = [1, 3, 7, 2, 5,8,33,22,64,111];
const findMax=(numbers)=>{
    return Math.max(...numbers);
  }
  let maxNumber = findMax(numbers);
  console.log("The maximum number is:", maxNumber);
  