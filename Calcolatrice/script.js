let currentInput = "";

function addToDisplay(event) {
    const clickedButton = event.target.innerText;

    if (clickedButton === '=') {
        try {
            currentInput = eval(currentInput);
            display.innerHTML = currentInput;
        } catch (error) {
            display.innerHTML = "Errore";
        }
    } else if (clickedButton === 'C') {
        currentInput = "";
        display.innerHTML = "";
    } else {
        currentInput += clickedButton;
        display.innerHTML = currentInput;
    }
}
