const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(action) {
    action.preventDefault();
    const formElements = action.currentTarget.elements;

    const mail = formElements.email.value;
    const password = formElements.password.value;

    const formArray = {
        mail: mail,
        password: password,
    };

    if (mail.length === 0) {
        alert('Please, provide an email')
    }else if( password.length === 0){
        alert('Please, enter a password')
    } else {
        console.log(formArray);
    }
}
