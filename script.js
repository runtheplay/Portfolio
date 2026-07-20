// Dark Mode

const darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        darkBtn.textContent = "☀ Light Mode";

    } else {

        darkBtn.textContent = "🌙 Dark Mode";

    }

});

// Copyright Year

document.getElementById("copyright-year")
.textContent = new Date().getFullYear();
