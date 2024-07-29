document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = event.target.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });
    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll("nav ul li");

    window.addEventListener("scroll", () => {
        let current = "";
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute("id");
            }
        });

        navLi.forEach(li => {
            li.classList.remove("active");
            if (li.querySelector("a").getAttribute("href").substring(1) === current) {
                li.classList.add("active");
            }
        });
    });
    const emailLink = document.getElementById("email-link");
    emailLink.addEventListener("click", function(event) {
        event.preventDefault();
        const contactSection = document.getElementById("contact");
        contactSection.scrollIntoView({ behavior: "smooth" });

        const contactForm = document.getElementById("contact-form");
        contactForm.style.display = "block";
    });
});
