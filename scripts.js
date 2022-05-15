document.addEventListener("DOMContentLoaded", fn);
// If late; I mean on time.
function fn() {
    if (document.readyState === "interactive" || document.readyState === "complete") {
        let inputs = document.querySelectorAll('input');
        let buttonSend = document.getElementById('submit_btn');

        buttonSend.disabled = true;
        buttonSend.style.opacity = "0.7"
        buttonSend.style.cursor = "not-allowed"



        let inputValidator = {
            "name": false,
            "email": false,
            "mobile": false
        }

        inputs.forEach((input) => {
            input.addEventListener('input', (event) => {
                let name = event.target.getAttribute('name');
                if (event.target.value.length > 0) {
                    inputValidator[name] = true;
                } else {
                    inputValidator[name] = false;
                };

                let allTrue = Object.keys(inputValidator).every((item) => {
                    return inputValidator[item] === true
                });

                if (allTrue) {
                    buttonSend.disabled = false;
                    buttonSend.style.opacity = "1"
                    buttonSend.style.cursor = "pointer"
                } else {
                    buttonSend.disabled = true;
                    buttonSend.style.opacity = "0.7"
                    buttonSend.style.cursor = "not-allowed"
                }
            })
        })
    }
}