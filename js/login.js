const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const mobile = document.getElementById("mobile").value.trim();

    const email = document.getElementById("email").value.trim();

    const password = document.getElementById("password").value;

    const confirmPassword = document.getElementById("confirmPassword").value;

    if (name === "") {
        alert("Please enter your full name.");
        return;
    }

    if (!/^[A-Za-z ]+$/.test(name)) {
        alert("Name should contain only letters.");
        return;
    }

    if (!/^[6-9][0-9]{9}$/.test(mobile)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
    }

    if (email === "") {
        alert("Please enter your email address.");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    const userData = {
        name: name,
        mobile: mobile,
        email: email,
        password: password
    };

    localStorage.setItem("timerGameUser", JSON.stringify(userData));

    alert("Registration Successful!");

    window.location.href = "../challenge.html";

});
