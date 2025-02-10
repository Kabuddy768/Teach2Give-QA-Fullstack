// 1. Check if a String is a Palindrome
function isPalindrome(str){
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return str === str.split('').reverse().join(''); 
}

console.log(isPalindrome("Ben"));
console.log(isPalindrome("A man, a plan, a canal, Panama"));
console.log(isPalindrome("Was it a car or a cat I saw?"));

// 2. Reverse a String
function reverse(str){
    return str.split('').reverse().join('');
}

console.log(reverse("Ben"));
console.log(reverse("A man, a plan, a canal, Panama"));

//3. Find the Longest Palindromic Substring
function longestPalindrome(str){
    let longest = '';
    for(let i = 0; i < str.length; i++){
        for(let j = i+1; j <= str.length; j++){
            let subStr = str.slice(i,j);
            if(isPalindrome(subStr) && subStr.length > longest.length){
                longest = subStr;
            }
        }
    }
    return longest;
}

console.log(longestPalindrome("abracadabra"));//"aca"
console.log(longestPalindrome("babad"));//"aca"


//4. Check if Two Strings are Anagrams
function isAnagram(str1,str2){
    str1 = str1.replace(/[^a-z0-9]/g, '').toLowerCase();
    str2 = str2.replace(/[^a-z0-9]/g, '').toLowerCase();
    if(str1.length !== str2.length){
        return false;
    }
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

console.log(isAnagram("Listen", "silent"));

//5. Remove Duplicates from a String
function removeDuplicates(str){
    return str.split('').filter((item, index, arr) => arr.indexOf(item) === index).join('');
}

console.log(removeDuplicates("programming"));
console.log(removeDuplicates("hello world"));
console.log(removeDuplicates("aaaa"));

//6. Count Palindromes in a String

function countPalindromes(str){
    let count = 0;
    for(let i = 0; i < str.length; i++){
        for(let j = i+1; j <= str.length; j++){
            if(isPalindrome(str.slice(i,j))){
                count++;
            }
        }
    }
    return count;
}

console.log(countPalindromes("abab"));//9

//7. Longest Common Prefix
 function longestCommonPrefix(strs){
    if(strs.length === 0){
        return '';
    }
    let prefix = strs[0];
    for(let i = 1; i < strs.length; i++){
        while(strs[i].indexOf(prefix) !== 0){
            prefix = prefix.slice(0, prefix.length - 1);
        }
    }
    return prefix;
}

console.log(longestCommonPrefix(["flower","flow","flight"]));//"fl"
console.log(longestCommonPrefix(["apple","banana","cherry"]));//"fl"

//8. Case Insensitive Palindrome
function isCaseInsensitivePalindrome(str){
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return str === str.split('').reverse().join(''); 
}   

console.log(isCaseInsensitivePalindrome("Ben"));
console.log(isCaseInsensitivePalindrome("Madam"));