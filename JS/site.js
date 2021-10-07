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

function reverseString(userString) {

    //last position in an array name name.length -1


    let revString =[];

    //reverse the string using a for loop 


    for (let index = userString.length - 1; index >= 0; index--) {
        const element = userString[index];
        
    }

    return revString;

}

//display the string in reverse 

function displayString(revString) {


    //write the message to the page 
    document.getElementById('msg').innerHTML = ` ${userString}  ${revString}`;

}