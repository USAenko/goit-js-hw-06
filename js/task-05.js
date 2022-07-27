const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
    const value = event.currentTarget.value;
    if (value) {
        output.textContent = value;
        return;
    }
    output.textContent = 'Anonymous';
});

