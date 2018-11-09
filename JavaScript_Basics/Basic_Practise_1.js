var fname = prompt("Enter your first name")
var lname = prompt("Enter your last name")
var age = prompt("Enter your age")
var height = prompt("Enter your height")
var pname = prompt("ENter your pet name")
// flag
flag = 0
// condition check
if(fname[0] == lname[0]){
    if(age > 20 && age < 30){
        if (height > 175){
            if(pname[pname.length-1] == "y"){
                flag = 1
                alert("Check the log!")
            }
        }
    }
}
if (flag === 0){
    alert("Thanks for the information!")
    console.log("Nothing here!")
}
else{
    console.log("Welcome Spy007!")
}