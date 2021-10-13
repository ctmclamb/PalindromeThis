//get user input 

function getValue() {

    //get user string from the page
    let userString = document.getElementById("userString").value; 
    //check for the palindrome 
    let returnObj = CheckForPalindrome(userString);
    //display out the message to the screen
    displayMessage(returnObj); 

}

//check if message is a palindrome
function CheckForPalindrome(userString) {
    //tacocat 
    userString = userString.toLowerCase();

    //remove spaces and special characters 
    let regex = /[^a-z0-9;]/gi;
    userString = userString.replace(regex,"")

    let revString = [];
    let returnObj =  {};

    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index]; 

        
    }
        if (userString == revString) {

            returnObj.msg = "Well done you've entered a palindrome"

        }

        else {
            returnObj.msg = "You didn't enter a palindrome. Please enter one"
        }

        returnObj.reversed = revString

        return returnObj;
}

//display the message to the string
functstion displayMessage() {



}