const arr = [0, 1, 1, 0];
const parseArray = arr => {
   const binaryString = arr.join("");
   return parseInt(binaryString, 2);
};
console.log(parseArray(arr));