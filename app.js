document.addEventListener("DOMContentLoaded", function() {
    const screen = document.querySelector("input");
    const buttons = document.querySelectorAll("button");
    const equal = document.querySelector("#equal");
    const clear = document.querySelector("#clear");

    buttons.forEach(function(button) {
        button.addEventListener("click", function(e) {
            let value = e.target.dataset.num;
            screen.value += value;
        });
    });

    equal.addEventListener("click", function() {
        if (screen.value === "") {
            screen.value = "";
        } else {
            let answer = eval(screen.value);
            // let answer = new Function('return ' + screen.value)();
            screen.value = answer;
        }
    });

    clear.addEventListener("click", function() {
        screen.value = "";
    });
});
