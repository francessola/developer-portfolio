console.log("Developer Portfolio loaded successfully");

const backToTop = document.querySelector("#back-to-top");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        backToTop.classList.add("is-visible");
    }
    else {
        backToTop.classList.remove("is-visible");
    }
});

backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth"
    });
});

const navLinks = document.querySelectorAll("nav ul a");
console.log(navLinks);

const sections = document.querySelectorAll("main section");

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            const sectionId = entry.target.id;

            navLinks.forEach(function (link) {
                link.classList.toggle("active", link.getAttribute("href") === "#" + sectionId);
            });
        }
    });
}, {
    rootMargin: "-20% 0px -60% 0px"
});

sections.forEach(function (section) {
    observer.observe(section);
});

const menuToggle = document.querySelector("#menu-toggle");
const navMenu = document.querySelector("#nav-links");

menuToggle.addEventListener("click", function () {
    const isOpen = navMenu.classList.toggle("is-open");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
    menuToggle.textContent = isOpen ? "x" : "☰";
});

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
        menuToggle.textContent = "☰";
    });
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        navMenu.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
        menuToggle.textContent = "☰";
    }
});