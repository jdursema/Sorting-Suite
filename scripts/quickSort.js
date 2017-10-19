function quickSort(array){
  if (array.length <= 1) {
    return array;
  }
  let a = [];
  let b = [];
  let pivot = array[array.length -1];
  for (let i = 0; i < array.length -1; i++) {
    if (array[i] < pivot) {
      a.push(array[i]);
    } else {
      b.push(array[i])
    }
  }
  return [...quickSort(a), pivot, ...quickSort(b)];
}


module.exports = quickSort