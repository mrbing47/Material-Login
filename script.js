const username = document.getElementById("username");
const password = document.getElementById("password");

const errName = document.getElementById("err-name");
const errPass = document.getElementById("err-pass");

const submit = document.getElementById("submit");

function changeState(element, isVisible) {
    if (isVisible) {
        element.style.visibility = "visible";
        element.style.opacity = "1";
    } else {
        element.style.visibility = "hidden";
        element.style.opacity = "0";
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
