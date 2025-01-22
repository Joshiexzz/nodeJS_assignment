for(let i=2;i<22;i+=2){
    console.log(i);
}

const Factorial=(n)=>{
    let result = 1;
    let j = 1;
    
    while (j <= n) {
        result *= j;
        j++;
    }
    console.log(`Factorial of ${n} is: ${result}`);
}
Factorial(7); 
