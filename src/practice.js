let arr=[1,2,3,4,5,6.7]


const initialValue = 0;
const sumWithInitial = arr.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);