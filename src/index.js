const number = document.getElementById("number");
const btn = document.getElementById("btn");

btn.addEventListener("click",()=>{
    const newNumber = parseInt(number.value);
    const result = document.getElementById("results");
    let sum = 1;
    for(let i = newNumber; i >= 1; i--){
        sum = sum * i;
    }
    // console.log(sum);

    setTimeout(()=>{
        result.innerHTML = `Factorial of ${newNumber} is ${sum}`;
    }, 2000);
})