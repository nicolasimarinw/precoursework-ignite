console.log('Hello World - these are my JS exercises');

//1. Reverse - Write a method that will take a string as input, and return a new string with the same letters in reverse order.

function reverse(string) {
    let reversed = [];
    for(let i = string.length; i>=0; i--){
        reversed.push(string[i]);
    }
    return reversed.join('');
}


console.log('Exercise 1 ------------------');
console.log(reverse("SIT Academy"));
console.log(reverse("Hello")); 
console.log(reverse("abcd")); 

// 2. Factorial; Write a method that takes an integer n in; it should return n*(n-1)*(n-2)*...*2*1. Assume n >= 0.

function factorial(n) {
    if(n === 0){
        return 1;
    } else if (n < 0){
        return('n must be > or = to 0');
    } else {
        let counter = 1;
        for(let i = 0; i < n; i++){
            let fact = counter * (n-i);
            counter = fact; 
        }
        return counter;
    };
    
}

console.log('');
console.log('exercise 2 --------------');
console.log(factorial(5)); // 120
console.log(factorial(4)); // 24
console.log(factorial(0)); // 1
console.log(factorial(-1)); // "n must be > or = to 0"

//3. Longest Word - Write a method that takes in a string. Return the longest word in the string

function longest_word(sentence) {
    let size = [];
    sentence = sentence.split(' ');
    for(i = 0; i < sentence.length; i++){
        if(sentence[i].length>size.length){
            size = sentence[i];
        }
    }
    return size;
}

console.log('');
console.log('exercise 3 -----------------');
console.log(longest_word("This is an amazing test")); // "amazing"
console.log(longest_word("Steve Carell")); // "Carell"
console.log(longest_word("SIT Academy 123")); // "Academy"


/* 4. Sum Nums -Write a method that takes in an integer num and returns the sum of 
all integers between zero and num, up to and including num. */

function sum_nums(num){
    let counter = 0;
    for (let i = 0; i<num; i++){
        counter = counter + (num-i);
    }
    return counter;
}


console.log('');
console.log('exercise 4 -----------------');
console.log(sum_nums(6));
console.log(sum_nums(1));
console.log(sum_nums(0));

/* Write a method that will take in a number of minutes, 
and returns a string that formats the number into hours:minutes */

function pad(n) {
    return (n<10) ? '0'+n : n;
 }

function time_conversion(minutes){
    let mins = minutes%60;
    let hours = (minutes - mins)/60;
    return(pad(hours) + ':' + pad(mins));
}

console.log('');
console.log('exercise 5 -----------------');
console.log(time_conversion(155));
console.log(time_conversion(61));
console.log(time_conversion(60));
console.log(time_conversion(59));

/* 6. Count Vowels
Write a method that takes a string and returns the number of vowels in the string */ 

function count_vowels(string){
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let counter = 0;
    let splitString = string.toLowerCase().split('');
    for(let i = 0; i < splitString.length; i++){
        for(let j = 0; j < vowels.length; j++){
            if(splitString[i] === vowels[j]){
                counter += 1;
            }
        }
    }
    return counter;
}

console.log('');
console.log('exercise 6 -----------------');
console.log(count_vowels("alphabet")); // 3
console.log(count_vowels("SIT Academy")); // 4
console.log(count_vowels("AaaAa")); // 5
console.log(count_vowels("fly")); // 0

// 7. Palindrome Write a method that takes a string and returns true if it is a palindrome.

function palindrome(string){
    let invert = [];
    let arrStr = string.toLowerCase().split('');
    for(i = arrStr.length-1; i >= 0; i--){
        invert.push(arrStr[i]);
    }

    if (invert.join() === arrStr.join()){
        return true;
    } else {
        return false;
    }
}

console.log('');
console.log('exercise 7 -----------------');
console.log(palindrome("ABBA")); // true
console.log(palindrome("AbbA")); // true
console.log(palindrome("abcd")); // false

/* 8. Most Letters - Write a method that takes a string in and returns true if
 the letter “z” appears within three letters after an “a”. */

 function nearby_az(string) {
    let arr = string.split('');
    let z = false;
    for (let i = 0; i<arr.length; i++){
        if(arr[i] === 'a'){
            for(j = 1; j<4; j++){
                if(arr[i+j] === 'z'){
                    z = true;
                }
            }
        }
    }
    return z;
}
console.log('');
console.log('exercise 8 -----------------');
console.log(nearby_az("abbbz")); // false
console.log(nearby_az("abz")); // true
console.log(nearby_az("abcz")); // true
console.log(nearby_az("abba")); // false



/* 9. Two Sum - Write a method that takes an array of numbers. 
If a pair of numbers in the array sums to zero, return the positions of those two numbers. 
If no pair of numbers sums to zero, return null. */

function two_sum(nums) {
    let resultArr = [];
    for(let i = 0; i<nums.length; i++){
        for(let j = 0; j < nums.length; j++){
            let sum = nums[i] + nums [j];
            //console.log(nums[i] + nums[j]);    
            if(sum === 0){
                resultArr.push(i);
                resultArr.push(j);
            }
        }
    }
    if (resultArr){
        return resultArr.slice(0,resultArr.length/2);
    } else {
        return null;
    }
}

console.log('');
console.log('exercise 9 -----------------');
console.log(two_sum([1, 3, -1, 5])); // [[0, 2]]
console.log(two_sum([1, 3, -1, 5, -3])); // [[0, 2], [1, 4]]
console.log(two_sum([1, 5, 3, -4])); // null


/* 10. Is Power of TwoWrite a method that takes in a number and returns true if it is a power of 2. 
Otherwise, return false. */

function is_power_of_two(num) {    
    let i = num;
    let power = '';
    if(i % 2 === 0){
        while(i % 2 === 0){
            i = i/2;
            if (i === 1) {	
                power = true;
                break;
            } 
        }
        if (i != 1) power = false;
    } else{
        power = false;
    }
    return power;
}

console.log('');
console.log('exercise 10 -----------------');
console.log(is_power_of_two(8)); // true
console.log(is_power_of_two(16)); // true
console.log(is_power_of_two(32)); // true
console.log(is_power_of_two(12)); // false
console.log(is_power_of_two(24)); // false 

/* 11. Repeat a string -Repeat a given string (first argument) num times (second argument). 
Return an empty string if num is not a positive number. */

function repeat_string_num_times(str, num) {
    let arr = str.split('');
    if(num > 0){
      while(num > 1){
        for (let i = 0; i < str.length; i++){
            arr.push(arr[i]);
        } 
        num = num - 1;
       
        }   
      return arr.join('');     
    } else{
        return '';
    }

    
}

console.log('');
console.log('exercise 11 -----------------');
console.log(repeat_string_num_times("abc", 3)); // 'abcabcabc'
console.log(repeat_string_num_times("abc", 1)); // 'abc'
console.log(repeat_string_num_times("abc", 0)); // ''
console.log(repeat_string_num_times("abc", -1)); // ''


/* 12. Sum All Numbers in a Range - Write a function that receives an array of two numbers as 
argument and returns the sum of those two numbers and all numbers between them. */

function add_all(arr) {
    let count = 0;
    for (let i = 0; i <= (arr[1]-arr[0]); i++){
        count = count + arr[0] + i;
    }
    return count;
}


console.log('');
console.log('exercise 12 -----------------');
console.log(add_all([1, 4]));// 10
console.log(add_all([5, 10])); // 45
console.log(add_all([9, 10])); // 19
console.log(add_all([0, 0]));// 0
console.log(add_all([-1, 1])); // 0

// 13. True or False - Write a function that checks if a value is classified as a boolean primitive. 

function is_it_true(args) {

    if(typeof args === 'boolean') {
        return true;
    } else {
        return false;
    }
}


console.log('');
console.log('exercise 13 -----------------');
console.log(is_it_true(true)); // true
console.log(is_it_true(false)); // true
console.log(is_it_true('true')); // false
console.log(is_it_true(1)); // false
console.log(is_it_true('false')); // false


/* 14. Return Largest Numbers in Arrays - Write a function that receives an array with four nested array. 
The function returns an array consisting of the largest number from each provided sub-array. */

function largest_of_four(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++){
        let counter = 0;
        for (let j = 0; j < arr[0].length; j++){
            arr[i][j] > counter ? counter = arr[i][j] : counter = counter;
        }
        result.push(counter);
    }
    return result;
}

console.log('');
console.log('exercise 14 -----------------');
console.log(largest_of_four([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])); 
// [27,5,39,1001]

// 15. Is it an anagram? - Write a JavaScript function to check if a word is an anagram or not.

function removeElement(arr, index){

}

function isAnagram(test, original) {
    if(test.length === original.length){
        let refArr = original.toLowerCase().split('');
        let testArr = test.toLowerCase().split('');
        for (let i = 0; i < testArr.length; i++ ){
            for (let j = 0; j < refArr.length; j++){
                if (testArr[i] === refArr[j]){
                    refArr.splice(j,1);
                    break;
                }
            }
        }
        if (refArr.length === 0){
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
};

console.log(isAnagram("foefet", "toffee")); // true
console.log(isAnagram("Buckethead", "DeathCubeK")); // true
console.log(isAnagram("Twoo", "WooT")); // true 
console.log(isAnagram("dumble", "bumble")); // false
console.log(isAnagram("ound", "round")); // false 
console.log(isAnagram("apple", "pale")); // false 

