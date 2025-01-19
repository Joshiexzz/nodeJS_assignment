const calculator=(firstNumber,secondNumber,operator)=>{
    let a=firstNumber;
    let b=secondNumber;
    switch(operator){
        case '+':
            console.log('Sum',a+b);
        break;
        case '-':
            console.log('Difference',a-b);
        break;
        case '*':
            console.log('Product',a*b);
        break;
        case '/':
            console.log('Division',a/b);
        break;
        default:
            console.log('Error');
    }
}
calculator(4,5,'+');
calculator(5,7,'-');
calculator(10,6,'*');
calculator(5,50,'/');
