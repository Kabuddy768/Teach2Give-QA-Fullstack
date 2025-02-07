
// 1. Check String Input
//  Write a JavaScript function to check whether an 'input' is a string or not.
// Test Data:
console.log(is_string('w3resource')); // true
console.log(is_string([1, 2, 4, 0])); // false
function is_string(input) {
    return typeof input === "string";
}

// 2. Check Blank String
//  Write a JavaScript function to check whether a string is blank or not.
// Test Data:
 console.log(is_Blank('')); // true
 console.log(is_Blank('abc')); // false
function is_Blank(input) {
    return input === "";
}

// 3. String to Array of Words
// ○ Write a JavaScript function to split a string and convert it into an array of words.
// ○ Test Data:
console.log(string_to_array("Robin Singh")); // ["Robin", "Singh"]
function string_to_array(input) {
    return input.split(" ");
}

// 4. Extract Characters
// ○ Write a JavaScript function to extract a specified number of characters from a
// string.
// ○ Test Data:
console.log(truncate_string("Robin Singh", 4)); // "Robi"
function truncate_string(input, n) {
    return input.substring(0, n);
}   
// 5. Abbreviate Name
// ○ Write a JavaScript function to convert a string into abbreviated form.
// ○ Test Data:
console.log(abbrev_name("Robin Singh")); // "Robin S."
function abbrev_name(input) {
    let names = input.split(" ");
    return names[0] + " " + names[1].charAt(0) + ".";
}

// 6. Hide Email Address
// ○ Write a JavaScript function that hides email addresses to prevent unauthorized access.
// ○ Test Data:
console.log(protect_email("robin_singh@example.com")); // "robin...@example.com"
function protect_email(input) {
    let email = input.split("@");
    return email[0].substring(0, 5) + "..." + "@" + email[1];
}
// 7. Parameterize String
// ○ Write a JavaScript function to parameterize a string.
// ○ Test Data:
// console.log(string_parameterize("Robin Singh from USA.")); //
// "robin-singh-from-usa"
function string_parameterize(input) {
    return input.toLowerCase().replace(/ /g, "-");
}
// 8. Capitalize First Letter
// ○ Write a JavaScript function to capitalize the first letter of a string.
// ○ Test Data:
console.log(capitalize('js string exercises')); // "Js string exercises"
function capitalize(input) {
    return input.charAt(0).toUpperCase() + input.slice(1);
}
//  9. Capitalize Each Word
// ○ Write a JavaScript function to capitalize the first letter of each word in a string.
// ○ Test Data:
console.log(capitalize_Words('js string exercises')); // "Js String Exercises"
function capitalize_Words(input) {
    return input.split(" ").map(word => capitalize(word)).join(" ");
}
// 10. Swap Case
// ○ Write a JavaScript function that converts uppercase letters to lowercase and vice versa.
// ○ Test Data:
console.log(swapcase('AaBbc')); // "aAbBC"
function swapcase(input) {
    return input.split("").map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join("");
}
// 11. Camelize String
// ○ Write a JavaScript function to convert a string into camel case.
// ○ Test Data:
// console.log(camelize("JavaScript Exercises")); // "JavaScriptExercises"
function camelize(input) {
    return input.split(" ").map((word, index) => index === 0 ? word.toLowerCase() : capitalize(word)).join("");
}
// 12. Uncamelize String
// ○ Write a JavaScript function to uncamelize a string.
// Test Data:
console.log(uncamelize('helloWorld')); // "hello world"
console.log(uncamelize('helloWorld','-')); // "hello-world"
function uncamelize(str, separator = " ") {
    return str.replace(/([a-z])([A-Z])/g, `$1${separator}$2`).toLowerCase();
}
// 13. Repeat String
// ○ Write a JavaScript function to concatenate a given string n times.
// ○ Test Data:
 console.log(repeat('Ha!', 3)); // "Ha!Ha!Ha!"
function repeat(input, n) { 
    return input.repeat(n);
}    

// 14. Insert in String
// ○ Write a JavaScript function to insert a string within another string at a given
// position.
// Test Data:
console.log(insert('We are doing some exercises.', 'JavaScript ', 18));
// ○ // "We are doing some JavaScript exercises."
function insert(input, insert, position) {
    return input.slice(0, position) + insert + input.slice(position);
}
// 15. Humanize Format
// ○ Write a JavaScript function that formats a number with the correct suffix (1st,
// 2nd, etc.).
function humanize_format(input) {
    if (input % 100 >= 11 && input % 100 <= 13) {
        return input + "th";
    }
    switch (input % 10) {
        case 1:
            return input + "st";
        case 2:
            return input + "nd";
        case 3:
            return input + "rd";
        default:
            return input + "th";
    }
}
// ○ Test Data:
console.log(humanize_format(302)); // "301st"
// 16. Truncate String with Ellipsis
// ○ Write a JavaScript function to truncate a string and append "...".
// Test Data:
console.log(text_truncate('We are doing JS string exercises.', 15, '!!'));
// ○ // "We are doing !!"
function text_truncate(input, length, ending) {
    return input.length > length ? input.substring(0, length) + ending : input;
}
// 17. Chop String into Chunks
// ○ Write a JavaScript function to chop a string into chunks.
// ○ Test Data:
 console.log(string_chop('w3resource', 3)); // ["w3r", "eso", "urc", "e"]
function string_chop(input, n) {
    return input.match(new RegExp(`.{1,${n}}`, "g"));
}
// 18. Count Substring Occurrences
// ○ Write a JavaScript function to count occurrences of a substring in a string.
// Test Data:
 console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
// ○ // Output: 2
function count(input, substring) {
    return input.split(substring).length - 1;
}
// 19. Reverse Binary Representation
// ○ Write a JavaScript function that reverses the binary representation of a number
// and returns its decimal form.
// ○ Test Data:
 console.log(reverse_binary(100)); // 19
function reverse_binary(input) {
    return parseInt(input.toString(2).split("").reverse().join(""), 2);
}
// 20. Pad String to Length
// ○ Write a JavaScript function to pad a string to a specified length.
// ○ Test Data:
 console.log(formatted_string('0000', 123, 'l')); // "0123"
function formatted_string(pad, input, direction) {
    return direction === "l" ? (pad + input).slice(-pad.length) : (input + pad).substring(0, pad.length);
}
