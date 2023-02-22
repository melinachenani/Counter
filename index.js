//selectors
const buttons = document.querySelectorAll(".btn");
const counterValue = document.querySelector(".counter span");



let count = 0;

//Event listener & function


buttons.forEach((btn)=> {
    btn.addEventListener("click", () =>{
        const classList = btn.classList;
        if(classList.contains("increment"))count++;
        else if(classList.contains("decrement"))count--;
        else count = 0;

        if(count>0) counterValue.style.color = "green";
        else if(count<0) counterValue.style.color = "red";
        else counterValue.style.color = "black";

        counterValue.textContent = count;
    });
    
});
