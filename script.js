const username = document.getElementById("username");
const password = document.getElementById("password");

const errName = document.getElementById("err-name");
const errPass = document.getElementById("err-pass");

const submit = document.getElementById("submit");

const snackbar = document.getElementById("snackbar");

const snackbutton = document.getElementById("snackbutton");

let snackbarInterval = 0;

function changeSnackState(visible) {
    if (visible) {
        snackbar.style.bottom = "5%";
        snackbar.style.visibility = "visible";
        snackbar.style.opacity = "1";
    } else {
        snackbar.style.bottom = "-40px";
        snackbar.style.visibility = "hidden";
        snackbar.style.opacity = "0";
    }
}
function changeState(element, visible) {
    if (visible) {
        element.style.visibility = "visible";
        element.style.opacity = "1";

        changeSnackState(visible);

        if (snackbarInterval == 0) {
            snackbarInterval = setTimeout(() => {
                changeSnackState(false);
                snackbarInterval = 0;
            }, 2000);
            console.log(snackbarInterval);
        }
    } else {
        element.style.visibility = "hidden";
        element.style.opacity = "0";
    }
}

snackbutton.addEventListener("click", event => {
    console.log(snackbarInterval);
    if (snackbarInterval != 0) {
        clearTimeout(snackbarInterval);
        snackbarInterval = 0;
        changeSnackState(false);
    }
});

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
