const passwordField = document.getElementById("password");
const lengthSlider = document.getElementById("lengthSlider");
const lengthValue = document.getElementById("lengthValue");
const strengthBar = document.getElementById("strengthBar");

lengthSlider.addEventListener("input", () => {
    lengthValue.textContent = lengthSlider.value;
});

function generatePassword() {

    const length = lengthSlider.value;
    const hasUpper = document.getElementById("uppercase").checked;
    const hasLower = document.getElementById("lowercase").checked;
    const hasNumber = document.getElementById("numbers").checked;
    const hasSymbol = document.getElementById("symbols").checked;

    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const number = "0123456789";
    const symbol = "!@#$%^&*()_+";

    let allChars = "";

    if (hasUpper) allChars += upper;
    if (hasLower) allChars += lower;
    if (hasNumber) allChars += number;
    if (hasSymbol) allChars += symbol;

    if (allChars === "") {
        alert("Select at least one option");
        return;
    }

    let password = "";

    for (let i = 0; i < length; i++) {
        password += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }

    passwordField.value = password;
    updateStrength(password);
}

function copyPassword() {
    passwordField.select();
    document.execCommand("copy");
    alert("Password Copied!");
}

function updateStrength(password) {

    let strength = 0;

    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    const colors = ["red", "orange", "yellow", "limegreen"];
    strengthBar.style.width = (strength * 25) + "%";
    strengthBar.style.background = colors[strength - 1] || "red";
}