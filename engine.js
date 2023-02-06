/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

// The method works fine.
function pigIt(str) {
    //Code here
    let arr = [];
    let count = 0;
    arr = str.split(' ');
    console.log("splitted arr is: ", arr)
    let s2;
    let index;
    let r = [];
    for (let i = 0; i < arr.length; i++) {
        index = arr[i][0];
        if (index !== "!" && index !== "?") {
            s2 = arr[i].substring(1);
            r[i] = s2 + index + "ay";
        } else {
            r[i] = index;
        }
        console.log(r[i])
    }
    let result = r.join(' ');
    return result;
}