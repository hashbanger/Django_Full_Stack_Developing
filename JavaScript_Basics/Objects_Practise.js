// Objects Exercise

////////////////////
// PROBLEM 1 //////
//////////////////

// Given the object:
var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31
}

// Add a method called nameLength that prints out the
// length of the employees name to the console.
function nameLength(emp){
  console.log(emp.name.length)
}

///////////////////
// PROBLEM 2 /////
/////////////////

// Given the object:
var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31
}

// Write program that will create an Alert in the browser of each of the
// object's values for the key value pairs. For example, it should alert:

// Name is John Smith, Job is Programmer, Age is 31.
function information(emp){
  console.log("Name is "+emp.name+", Job is "+emp.job+", Age is "+emp.age)
}



///////////////////
// PROBLEM 3 /////
/////////////////

// Given the object:
var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31
}

// Add a method called lastName that prints
// out the employee's last name to the console.
function lname(emp){
  console.log(emp.name.split(" ")[1])
}
