snail = function(array) {
//   let arr = [array[0][0]];
//   let i = 0;
//   let j = 0;
//   let last = arr.length - 1;
//     if (i === 0) {
//       j++
//       arr.push(array[i][j]);
//       while (j === last) {
//         i++
//         arr.push(array[i], [j]);
//         while (i === last) {
//            j--
//           arr.push(array[i][j])
//       }
//     }
//   }
//   return arr;
// }
  let finalArray =[];
  while (array.length) {
    finalArray.push(...array.shift());
    for (let i = 0; i < array.length; i++) {
      finalArray.push(array[i].pop());
    }
    finalArray.push(...(array.pop() || []).reverse());
    for (let j = array.length - 1; j >= 0; j--) {
      finalArray.push(array[j].shift());
    }
  }
  return finalArray
  
  
  }
