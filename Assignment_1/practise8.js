check=(num)=>{
    if (num > 0) {
        console.log(`${num} is positive.`);
    } else if (num < 0) {
        console.log(`${num} is negative.`);
    } else {
        console.log(`${num} is zero.`);
    }
}
check(7)
check(-7) 
check(0)

const Largest=(a, b, c)=>{
    let largest = a;
    if (b > largest) {
        largest = b;
    }
    if (c > largest) {
        largest = c;
    }
    console.log("The largest number is:", largest);
}

Largest(7, 99, 65);

