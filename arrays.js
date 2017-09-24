chocolateBars =["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  //var array1 = array
  //array1.unshift(element)
  return [element, ...array]
  //return array1
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element){
  var array1 = array
  array1.push(element)
  return array1
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

function accessElementInArray(array, index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array){
  array.slice(1)
  return array
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}
