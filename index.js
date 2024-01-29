document.getElementById("submit").addEventListener("click", function() {
    let emailInput = document.getElementById("email");
    let passwordInput = document.getElementById("pass"); 
    const regularVal = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let emailErrorMessage = document.getElementById("email-error-message");
    let passwordErrorMessage = document.getElementById("password-error-message");

    if (!regularVal.test(emailInput.value)) {
        emailErrorMessage.innerText = "Please enter a valid email address";
    } else {
        emailErrorMessage.innerText = "";
    }

    let minPasswordLength = 6;
    if (passwordInput.value.length < minPasswordLength) {
        passwordErrorMessage.innerText = "Password must be at least " + minPasswordLength + " characters long";
    } else {
        passwordErrorMessage.innerText = "";
    }

    if (emailErrorMessage.innerText === "" && passwordErrorMessage.innerText === "") {
        alert("You are logged in");
    } 
});