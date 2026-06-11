document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");
    const errorMsg = document.getElementById("errorMsg");
    const errorText = document.getElementById("errorText");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "admin" && password === "admin123") {

            window.location.href = "admin.html";
        } 
        else if (username === "user" && password === "user123") {
            window.location.href = "menu.html";
        } 
        else {
            errorText.textContent = "Login Gagal";
            errorMsg.classList.remove("hidden");
        }
    });
});