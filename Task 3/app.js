let str="Salam Necesn";
function findNLetters (str){
    return str.toLocaleLowerCase().split("").filter(element => element == 'n' ).length
}
console.log(findNLetters(str) + ' eded n herfi var');