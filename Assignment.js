// Assigment. Create a function that checks if the input/parameter is an even number. 
function checkEven(num){
  if (num % 2 === 0){
  console.log('Even number!')
  }
  else {
    console.log('Not an even number')
  }
}
//Create a function that prints to the console n1 to n2. where n1 is the first input/parameter and n2 is the second input/parameter
function printNum(n1,n2){
for(let i = n1, i <= n2, i++){
  console.log(i)
}
}
//Create a function that sum the values in-between two numbers. eg calcFunc(1,3) returns 6. ie. 1+2+3.
function calcFunc(n1, n2){
  let sum = 0
  for(let i = n1, i <= n2, i++){
    sum += i
}
      return sum
}
