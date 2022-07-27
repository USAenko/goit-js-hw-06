const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(action) {
    action.preventDefault();
    const formElements = action.currentTarget.elements;

    const mail = formElements.email.value;
    const password = formElements.password.value;

    
    console.log(mail, password);
}
