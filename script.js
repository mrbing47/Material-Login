const username = document.getElementById("username");
const password = document.getElementById("password");

const errName = document.getElementById("err-name");
const errPass = document.getElementById("err-pass");

const submit = document.getElementById("submit");

const snackbar = document.getElementById("snackbar");

function changeState(element, isVisible) {
    if (isVisible) {
        element.style.visibility = snackbar.style.visibility = "visible";
        element.style.opacity = snackbar.style.opacity = "1";
        snackbar.style.bottom = "40px";
    } else {
        element.style.visibility = snackbar.style.visibility = "hidden";
        element.style.opacity = snackbar.style.opacity = "0";
        snackbar.style.bottom = "-40px";
    }
}

submit.addEventListener("click", event => {
    const input_name = username.value;
    const input_pass = password.value;

    input_name === ""
        ? changeState(errName, true)
        : changeState(errName, false);
    input_pass === ""
        ? changeState(errPass, true)
        : changeState(errPass, false);
});

username.addEventListener("keypress", event => {
    if (errName.style.opacity === "1") {
        changeState(errName, false);
    }
    if (event.key === "Enter") {
        submit.dispatchEvent(
            new MouseEvent("click", { bubbles: false, cancelable: false })
        );
    }
});

password.addEventListener("keypress", event => {
    if (errPass.style.opacity === "1") {
        changeState(errPass, false);
    }
    if (event.key === "Enter") {
        submit.dispatchEvent(
            new MouseEvent("click", { bubbles: false, cancelable: false })
        );
    }
});
