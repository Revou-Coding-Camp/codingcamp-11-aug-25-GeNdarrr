// Greeting prompt reset saat refresh
window.onload = function() {
    let name = prompt("Masukkan Nama Anda:");
    if (name) {
        document.getElementById("greeting").innerText = `Hi ${name}, Welcome to Website`;
    }
};

// Navbar scroll change color & active link
const navbar = document.getElementById("navbar");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.remove("transparent");
        navbar.classList.add("solid");
    } else {
        navbar.classList.remove("solid");
        navbar.classList.add("transparent");
    }

    let current = "";
    sections.forEach(sec => {
        const secTop = sec.offsetTop - 60;
        if (pageYOffset >= secTop) {
            current = sec.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Hamburger menu
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});

// Form validation & show result
document.getElementById("messageForm").addEventListener("submit", function(e) {
    e.preventDefault();
    let nama = document.getElementById("nama").value;
    let tanggal = document.getElementById("tanggal").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let pesan = document.getElementById("pesan").value;

    document.getElementById("formResult").innerHTML = `
        <p><strong>Nama:</strong> ${nama}</p>
        <p><strong>Tanggal Lahir:</strong> ${tanggal}</p>
        <p><strong>Jenis Kelamin:</strong> ${gender}</p>
        <p><strong>Pesan:</strong> ${pesan}</p>
    `;
});
