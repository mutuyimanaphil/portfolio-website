document.addEventListener("DOMContentLoaded", function () {

    // Smooth Scroll for Navigation Links
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Select the dark mode toggle button
    const darkModeToggle = document.getElementById("darkModeToggle");

    if (darkModeToggle) {
        // Check if dark mode is already enabled in local storage
        if (localStorage.getItem("darkMode") === "enabled") {
            document.body.classList.add("dark-mode");
        }

        // Toggle Dark Mode on Button Click
        darkModeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");

            // Save dark mode state in local storage
            if (document.body.classList.contains("dark-mode")) {
                localStorage.setItem("darkMode", "enabled");
            } else {
                localStorage.setItem("darkMode", "disabled");
            }
        });
    }

    // Project Filtering
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projects = document.querySelectorAll(".project");

    if (filterButtons.length > 0 && projects.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener("click", () => {
                const filter = button.getAttribute("data-filter");

                projects.forEach(project => {
                    if (filter === "all" || project.getAttribute("data-category") === filter) {
                        project.style.display = "block";
                    } else {
                        project.style.display = "none";
                    }
                });
            });
        });
    }

    // Fade-in Animation for About Us Section
    const fadeInElements = document.querySelectorAll(".fade-in");

    if (fadeInElements.length > 0) {
        const fadeInObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        }, { threshold: 0.5 });

        fadeInElements.forEach(element => fadeInObserver.observe(element));
    }
});
