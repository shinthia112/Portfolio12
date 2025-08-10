document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll('a.links').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const contactForm = document.querySelector(".contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Thank you! Your message has been received.");
            contactForm.reset();
        });
    }

    const darkModeBtn = document.getElementById("darkModeBtn");

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        darkModeBtn.textContent = "☀️ Light Mode";
    }

    darkModeBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            darkModeBtn.textContent = "☀️ Light Mode";
        } else {
            localStorage.setItem("theme", "light");
            darkModeBtn.textContent = "🌙 Dark Mode";
        }
    });

    const hireMeBtn = document.getElementById('hireMeBtn');
    const contactSection = document.getElementById('contact');

    hireMeBtn.addEventListener('click', () => {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    });

});
