const loginBox = document.querySelector(".login-box");
const signupBox = document.querySelector(".signup-box");
const slider = document.querySelector(".slider");
const formSection = document.querySelector(".form-section");
const loginButton = document.querySelector(".login");
const signupButton = document.querySelector(".signup");
const emailInput = document.querySelectorAll(".email");
const passwordInput = document.querySelectorAll(".password");
const nameInput = document.querySelector(".name");
const loginBtn = document.querySelectorAll(".clkbtn")[0];
const signupBtn = document.querySelectorAll(".clkbtn")[1];

function showLogin() {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
}

function showSignup() {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
}

function isValidEmail(email) {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}

function storeData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getData(key) {
    return JSON.parse(localStorage.getItem(key));
}

loginButton.addEventListener("click", showLogin);
signupButton.addEventListener("click", showSignup);

loginBtn.addEventListener("click", () => {
    const email = emailInput[1].value;
    const password = passwordInput[0].value;
    const user = getData(email);
    if (!user || user.password !== password) {
        alert("Invalid email or password.");
    } else {
        alert("Login successful.");
    }
});

signupBtn.addEventListener("click", () => {
    const name = nameInput.value;
    const email = emailInput[0].value;
    const password = passwordInput[1].value;
    const confirmPassword = passwordInput[2].value;
    if (!isValidEmail(email)) {
        alert("Invalid email format.");
    } else if (password !== confirmPassword) {
        alert("Passwords do not match.");
    } else {
        const user = {
            name,
            email,
            password,
        };
        storeData(email, user);
        alert("Registration successful.");
        showLogin();
    }
});
