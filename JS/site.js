//Get value from the UI 
//aka controller function

function getValue() {

    document.getElementById("alert").classList("invisible");
    let userString = document.getElementById("userString").value;
    let revString = reverseString(userString);
    displayString(revString);
}


//reverse the string 
//aka logic function 

function reverse