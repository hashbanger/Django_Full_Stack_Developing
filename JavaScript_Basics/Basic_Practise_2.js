alert("Select OK to start the app.")
var cmd = ""
var sname = []
while(cmd !== "quit"){
    cmd = prompt("Enter a command add, remove, display or quit")
    if (cmd === "add"){
        aname = prompt("Enter the student name to add")
        sname.push(aname);
    }
    else if(cmd === "remove"){
        rname = prompt("Enter the student name to remove")
        var ind = sname.indexOf(rname)
        sname.splice(ind, 1,)
    }
    else if(cmd === "display"){
        console.log(sname);
    }
}
alert("Thanks!")