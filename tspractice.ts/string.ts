// string -- combination of characters 

/* 1. length -- its a property, it counts the length of the char inside the string 
syntaxs
stringname.length */

let str = "this is a javascript"
console.log(str.length);

/* 2. charAT(index) -- it returns the char at specified index
stringname.charAt(index)  */

console.log(str.charAt(5));
console.log(str.charAt(19));

/*3. concat(strings) -- merges 2 or more string and returns the new array 
stringname.cobact(str, str1) */

let str1 = "add typescript as well"
console.log(str1.concat(str));
console.log(str.concat(str1));

/* 4. includes(searchstring, startindex?) -- returns true if serach element is persent inside a
string 
stringname.includes(serachstring, stratindex?) */

console.log(str1.includes("add"));
console.log(str1.includes("w"));
console.log(str1.includes("no"));

/* 5. indexof(element, index) -- 1st occurance of the char in the string
stringname.indexof(element, inex) */
console.log(str1.indexOf('y'));
console.log(str1.indexOf('a',14));

/* 6. lastindexof(string/char , indesx) -- last occurance of char in the string
stringname.lastindexof(char/string indedx) */
console.log(str1.lastIndexOf('e'));

/* 7. slice(startindex?, endindex?) -- returns the posistion of string btw start n end index
stringname.slice(startindedx?, endindedx?) */
//let str1 = "add typescript as well"
console.log(str1.slice(2, 15));
console.log(str1.slice(15, 2)); // empty

/* 8. substring(startindex, endindex?) -- returns the posistion of string btw start n end index
but start index is mandatory n also if we give startindex is greater than end index it will 
reverse the btw Start n End index
stringname.substring(startindedx, endindedx?) */

console.log(str1.substring(2, 15));
console.log(str1.substring(15, 2));
console.log(str1.substring(20, 2));

/* 9. startswith(serachstring, position?) -- checks if a string starts with a specific char/ string
n returns the result in terms of boolen 
stringname.startswith(serachstring, position?) */
//let str1 = "add typescript as well"

console.log(str1.startsWith('a'));
console.log(str1.startsWith('T'));
console.log(str1.startsWith('Ty'));
console.log(str1.startsWith('ty', 4));

/* 10. endswith(serachstring, position?) -- checks if a string ends with a specific char/ string
n returns the result in terms of boolen 
stringname.endswith(serachstring, position?) */
console.log("*************************************");

console.log(str1.endsWith('a', 0));
console.log(str1.endsWith('t', -6));
console.log(str1.endsWith('Ty'));
console.log(str1.endsWith('ty',4));
console.log(str1.endsWith('ll'));

/* 11. toupper case() -- convertes the char / string from lower to  upper case 
stringname.tolower() */
console.log(str1.toUpperCase());

/* 12. tolower case() -- convertes the char / string from upper to lower case 
stringname.tolower() */
let str2 = "END MY LIFE"
console.log(str2.toLowerCase());

/* 13. split(separator) -- splits the strings into multiple string 
stringname.split(separator) */
let email = "dikshitha1722@gmail.com"
console.log(email.split("@"));
console.log(email.split("@")[1]);
console.log(email.split("a")[0]);
console.log(email.split("a")[1]);

/* 14. trim() -- removes the whitespace from the beganning and ending of a string 
stringname.trim() */
let t="           trim  "
console.log(t.length);
console.log(t.trim());
console.log(t.trim().length);

let t1="           trim  "
console.log(t1.trimEnd()); // trimend 
console.log(t1.trimStart()); // trimstarts

