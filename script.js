const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const symbols = ['!', '-', '+', '=', '_', '@', '#', '$', '%', '^', '(', ')', '*', '&'];

const passwordInput = document.getElementById("password");

const passwordLengthLabel = document.querySelector(".password-length label");
const passwordLengthInput = document.querySelector(".password-length input");

const useLettersInput = document.getElementById("letters");
const useNumbersInput = document.getElementById("numbers");
const useSymbolsInput = document.getElementById("symbols");

const generateButton = document.getElementById("generate-button");
const resetButton = document.getElementById("reset-button");
const copyButton = document.getElementById("copy-button");

let passwordLength = passwordLengthInput.value;
let useLetters = useLettersInput.checked,
    useNumbers = useNumbersInput.checked,
    useSymbols = useSymbolsInput.checked;


passwordLengthLabel.textContent = passwordLengthInput.value;

passwordLengthInput.addEventListener('change', (e) => {
    passwordLengthLabel.textContent = e.target.value;
    passwordLength = e.target.value;
});

useLettersInput.addEventListener('change', (e) => {
    useLetters = e.target.checked;
});
useNumbersInput.addEventListener('change', (e) => {
    useNumbers = e.target.checked;
});
useSymbolsInput.addEventListener('change', (e) => {
    useSymbols = e.target.checked;
});

generateButton.addEventListener('click', () => {
    if (useLetters === false &&
        useNumbers === false &&
        useSymbols === false) return;

    let steps = passwordLength;
    let password = "";

    while (steps != 0) {
        let character = Math.floor(Math.random() * 3) + 1;;

        switch (character) {
            case 1:
                if (useLetters !== false) {
                    password += letters[Math.floor(Math.random() * letters.length - 1) + 1];
                    steps--;
                }
                break;
            case 2:
                if (useNumbers !== false) {
                    password += numbers[Math.floor(Math.random() * numbers.length - 1) + 1];
                    steps--;
                }
                break;
            case 3:
                if (useSymbols !== false) {
                    password += symbols[Math.floor(Math.random() * symbols.length - 1) + 1];

                }
                break;
        }
    }
    passwordInput.value = password;
});

resetButton.addEventListener('click', () => {
    passwordInput.value = "";
})

copyButton.addEventListener('click', () => {
    if (passwordInput.value.length > 0)
        navigator.clipboard.writeText(passwordInput.value);
})
