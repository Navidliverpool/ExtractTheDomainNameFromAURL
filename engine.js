// Not working yet.
function pigIt(str) {
    //Code here
    let arr = [];
    let count = 0;
    arr = str.split(' ');
    console.log("splitted arr is: ", arr)
    let index;
    let r = [];
    for (let i = 0; i < arr.length; i++) {
        index = arr[i][0];
        let s2 = arr[i].substring(1);
        r[i] = s2 + index + "ay";
        console.log(r[i])
    }
    let result = r.join(' ');
    return result;
}