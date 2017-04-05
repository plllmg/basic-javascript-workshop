function firstLetter(inputString) {
    if (inputString)
    {
        return inputString[0];
    }
}


function lastLetter(inputString) {
    if(inputString)
    {
        return inputString[inputString.length-1]
    }

}

function letterAtPosition(inputString, position) {
    if(inputString)
    {
        return inputString[position]
    }
}

function addTwoNumbers(num1, num2) {
    if((typeof num1 === 'number') && (typeof num2 === 'number') )
    {
        return num1 + num2
    }

}

function multiplyTwoNumbers(num1, num2) {
    if((typeof num1 === 'number') && (typeof num2 === 'number') )
    {
        return num1 * num2
    }

}

function calculator(operation, num1, num2) {
    
    if((typeof num1 === 'number') && (typeof num2 === 'number') )
    {
        if (operation === 'add') {
            return num1 + num2;
        }

        if (operation === 'sub') {
            return num1 - num2;
        }
        
        if (operation === 'mult') {
            return num1 * num2;
        }
       
        if (operation === 'div') {
            return num1 / num2;
        }
        
    }
    
    return undefined;


}

function repeatString(inputString, numRepetitions) {
    
    var temp = "";
    
    for (var i = 0; i < numRepetitions; i++){
        
        temp = temp + inputString 
        
    }
    
    return temp

}

function reverseString(inputString) {
    
    var temp = "";
    
    for (var i = inputString.length - 1; i >= 0; i--){
        
        temp = temp + inputString[i]
        
    }
    
    return temp
}

function longestWord(inputString) {
    
    var longest = "";
    
    var inputStringArray = inputString.split(' ');
    
    
    for (var i = 0; i < inputStringArray.length; i++){
        if (longest.length <= inputStringArray[i].length){
            longest = inputStringArray[i]
        }
    }
    return longest;

}

function capitalize(inputString) {
    
    if (inputString === ""){
        return ''
    }
    var inputStringArray = inputString.split(' ');
    var finalstr = "";
    for (var i = 0; i < inputStringArray.length; i++){
        var temp = inputStringArray [i][0].toUpperCase();
        for (var j = 1; j < inputStringArray [i].length; j++){
            temp = temp + inputStringArray[i][j].toLowerCase();
        }
        finalstr = finalstr + temp + " "
    }
    finalstr = finalstr.substring(0, finalstr.length-1) 
    return finalstr;
}

function sumOfNumbers(arrayOfNumbers) {
    
    var sum = 0
    for (var i = 0; i < arrayOfNumbers.length; i++){
        if(typeof arrayOfNumbers[i] === 'number'){
           sum = sum + arrayOfNumbers[i]; 
        }
    }
    return sum;
}

function uniqueElements(array1, array2) {
    var uniqueList = [];
    if (Array.isArray(array1)  && Array.isArray(array2)){
        
        for (var i = 0; i < array1.length; i++){
            var unique = true
            for (var j = 0; j < array2.length; j++){
                unique = true
                if (array1[i] === array2[j]){
                    unique = false
                    break
                }
            }
            if (unique){
                uniqueList.push(array1[i])
            }
        }
        for (var i = 0; i < array2.length; i++){
            var unique = true
            for (var j = 0; j < array1.length; j++){
                unique = true
                if (array2[i] === array1[j]){
                    unique = false
                    break
                }
            }
            if (unique){
                uniqueList.push(array2[i])
            }
        }
    
        return uniqueList
    }
    return undefined
}

function isPalindrome(inputString) {
    
    var splitted = inputString.split('')
    var justLetters = ""
    for (var i = 0; i < splitted.length; i++){
        if (splitted[i].match(/[a-z]/i)){
            justLetters = justLetters + splitted[i].toLowerCase()
        }
    }
    
    var counter = justLetters.length - 1
    for (var i = 0; i < justLetters.length; i++)
    {
        if (justLetters[i] !== justLetters[counter]){
            return false
        }
        counter--
    }
    return true
}


function wrapCharacter(inputString) {
    var finalstr = ""
    
    for (var i = 0; i < inputString.length; i++){
        
        if (i % 40 === 0 && i != 0)
        {
            finalstr = finalstr + '\n'
            if (inputString[i] === ' ')
            {
                inputString = inputString.substring(0,i) + inputString.substring(i+1)
            }
        }

        finalstr = finalstr + inputString[i]    

        
    }
    return finalstr
}

function wrapWord(inputString) {
    var finalstr = ""
    var counter = 0;
    for (var i = 0; i < inputString.length; i++){
        
        var nextspace = inputString.indexOf(' ', i)
        
        if (nextspace - i >= 40)
        {
            finalstr = finalstr + inputString.substring(i, nextspace) + '\n'
           // counter = 40;
        }
        

        counter++
        
        finalstr = finalstr + inputString[i]
        
        if (counter === 40 && inputString[i] !== ' ')
       {
           finalstr = finalstr + '\n'
           counter = 0
           
       } else if (counter === 40 && inputString[i] === ' '){
           finalstr = finalstr + '\n'
           inputString = inputString.substring(0,i) + inputString.substring(i+1)
           counter = 0
       }
    }
    
    return finalstr
}

function bubbleSort(arrayOfNumbers) {
    
    for (i = 0 ; i < arrayOfNumbers.length - 1 ; i++)
    
		for (j = 0 ; j < arrayOfNumbers.length - 1 ; j++){
		    
			if ( arrayOfNumbers[j] > arrayOfNumbers[j + 1] ){
			    
				var temp = arrayOfNumbers[j];
				arrayOfNumbers[j] = arrayOfNumbers[j + 1];
				arrayOfNumbers[j + 1] = temp;
			}
		}
		
	return arrayOfNumbers

}

/***** DO NOT EDIT AFTER THIS LINE *****/
module.exports = {
    firstLetter: firstLetter,
    lastLetter: lastLetter,
    letterAtPosition: letterAtPosition,
    addTwoNumbers: addTwoNumbers,
    multiplyTwoNumbers: multiplyTwoNumbers,
    calculator: calculator,
    repeatString: repeatString,
    reverseString: reverseString,
    longestWord: longestWord,
    capitalize: capitalize,
    sumOfNumbers: sumOfNumbers,
    uniqueElements: uniqueElements,
    isPalindrome: isPalindrome,
    wrapCharacter: wrapCharacter,
    wrapWord: wrapWord,
    bubbleSort: bubbleSort
};