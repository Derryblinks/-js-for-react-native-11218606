function processArray(numbers){
    return numbers.map(num =>{
        if (num % 2 === 0){
            return num ** 2 ; //this line of code is to square the even numbers
        }
        else{
            return num ** 3; //this line of code is to triple odd numbers
        }
    })
}


function formatArrayStrings(stringArr, numberArr = processArray(num)) {
    return stringArr.map((str, index) => {
        let num = numberArr[index];
        return num % 2 === 0 ? str.toUpperCase() : str.toLowerCase();
    });
}
strArr = ["John", "Amma"]
numArray = [1,2]

console.log(formatArrayStrings(strArr,numArray))



//module.exports = {processArray, formatArrrayStings}
