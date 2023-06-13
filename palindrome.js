function isPalindrome(str) {
    let b = "";
    for (let index = str.length-1; index >= 0; index--){
        b = b + str.charAt(index);       
    }    
   console.log(""); 
   console.log(`Given String : ${str}`);
   console.log(`Reverse String : ${b}`);
   
    if (str == b) {
        console.log(`${str} is palindrome string.`);        
    }else {
        console.log(`${str} is not palindrome string.`);
    }
    console.log("------------------------------------------------------");

}
console.log("=========================== Check String is Palindrome or Not ===========================");
isPalindrome("madam");
isPalindrome("141");
isPalindrome("Sunday");
isPalindrome("mom");
isPalindrome("listen");
isPalindrome("dad");
