console.log('Hello World');     

let result = document.getElementById('result');
let inputA = document.getElementById('inputA');
let inputB = document.getElementById('inputB');
let addBtn = document.getElementById('btn');
let resetBtn = document.getElementById('resetBtn');

addBtn.addEventListener('click', () => {
    if(inputA && inputB){
        intA = parseInt(inputA.value);
        intB = parseInt(inputB.value);
        result.innerHTML = intA + intB;
    } else{
        result.innerHTML = 'input 2 numbers';
    }
})

resetBtn.addEventListener('click', () => {
    inputA.value = '';
    inputB.value = '';
    result.innerHTML = 'Result';
})
