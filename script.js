const display = document.getElementById("display");

        // Function to add numbers/operators to the display
        function appendToDisplay(input) {
            display.value += input;
        }

        // Function to clear the entire display
        function clearDisplay() {
            display.value = "";
        }

        // Function to delete the last character
        function deleteLast() {
            display.value = display.value.toString().slice(0, -1);
        }

        // Function to calculate the result
        function calculateResult() {
            try {
                // Using Function constructor instead of eval() for better security
                // e.g., "2+2" becomes 4
                if (display.value === "") {
                    return; // Do nothing if empty
                }
                display.value = new Function("return " + display.value)();
            } catch (error) {
                display.value = "Error";
                // Clear error after 1.5 seconds
                setTimeout(() => display.value = "", 1500);
            }
        }
