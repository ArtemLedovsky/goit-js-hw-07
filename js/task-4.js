const form = document.querySelector('.login-form')

form.addEventListener("submit", handleSubmit)



function handleSubmit(event) {
        event.preventDefault()

    const elems = event.currentTarget.elements;
    const emailValue = elems.email.value.trim();
    const pwdValue = elems.password.value.trim()
    
    if (emailValue === "" || pwdValue === "") {
        alert('All form fields must be filled in')
    } else {
        const userInfo = {
            email: emailValue,
            password: pwdValue
        }
        console.log(userInfo);
    }


    event.currentTarget.reset()
}