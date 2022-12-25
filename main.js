

// You are given a string (STR) of length N, consisting of only the lower case English alphabet.
// Your task is to remove all the duplicate occurrences of characters in the string.

// let str="abcadeecfb";

// let setStr= new Set(str);
// console.log(setStr);

// const uniqueArr=[...setStr];
// console.log(uniqueArr);
// let newStr="";

// for (let index = 0; index < uniqueArr.length; index++) {
//     newStr += uniqueArr[index];
    
// }
// console.log("newStr:",newStr)




// You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)

// Input:
// abcadeecfb
// let str="abcadeecfb"
// let map= new Map();
// for(let i=0;i<str.length;i++){
//    if(map.has(str[i])){
//         let value=map.get(str[i]);
//         map.set(str[i],value+1);
//    } 
//    else{
//     map.set(str[i],1);
//    }
// }

// for(let [k,v] of map){
//     console.log(k+"-->"+v);
// }