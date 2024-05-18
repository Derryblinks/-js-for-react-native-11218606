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

