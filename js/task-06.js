const inputChange = document.querySelector('input');

inputChange.addEventListener('blur', onInputBlur);

function onInputBlur(action) {
    const length = action.currentTarget.value.length;
    if (length === Number(inputChange.dataset.length)) {
        changeClass(['invalid'], 'valid');
    }else{
        changeClass(['valid'], 'invalid');
    }
    if (!length) {
        changeClass(['invalid', 'valid']);
        // inputChange.classList.remove('valid');
        // inputChange.classList.remove('invalid');
    }
}

function changeClass(deleting, adding) {
    inputChange.classList.remove(...deleting);
    if (adding) inputChange.classList.add(adding);
}