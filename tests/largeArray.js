function randomArray (lowerLimit, upperLimit, arraySize) {
  var resultArray = [];
  for (var i = 0 ; i < arraySize; i++){
    var random = Math.floor(Math.random() * ( upperLimit - lowerLimit ) + lowerLimit);
    resultArray.push(random);
  }
  return resultArray;
}


module.exports = randomArray