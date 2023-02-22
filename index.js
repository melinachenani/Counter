//selectors
const incrementBtn = document.querySelector(".increment");
const counterValue = document.querySelector(".counter span");
const decrementBtn = document.querySelector(".decrement");
const resetBtn = document.querySelector(".reset");



//event listeners
let count = 0;
incrementBtn.addEventListener("click", incFunction);
decrementBtn.addEventListener("click", decFunction);
resetBtn.addEventListener("click", resetFunction);



//functions
function incFunction(){
    count++;
    counterValue.textContent = count;
}

function decFunction(){
    count--;
    counterValue.textContent = count;
}

function resetFunction(){
    count = 0;
    counterValue.textContent = count;
}