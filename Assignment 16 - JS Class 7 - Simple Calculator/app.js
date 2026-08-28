function calculate(e) {
    var string = document.getElementById("screen");

    if (e == "=") {
        try {
            string.value = eval(string.value);
        } catch (error) {
            string.value = "Error";
        }
    }

    else if (e == "C") {
        string.value = "";
    }

    else {
        if (string.value === "Error") {
            string.value = "";
            string.value += e;
        }

        else {
            string.value += e;
        }
    }
}