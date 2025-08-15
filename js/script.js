// Greeting prompt reset saat refresh
window.onload = function() {
    let name = prompt("Masukkan Nama Anda:");
    if (name) {
        document.getElementById("greeting").innerText = `Hi ${name}, Welcome to Website`;
    }
};

// Navbar toggle untuk mobile

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

document.getElementById("messageForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const tanggal = document.getElementById("tanggal").value;
  const gender = document.querySelector('input[name="gender"]:checked')?.value;
  const pesan = document.getElementById("pesan").value.trim();
  const result = document.getElementById("formResult");

  if (!pesan) {
    alert("Pesan tidak boleh kosong!");
    return;
  }

  // Ambil waktu sekarang
  const now = new Date();
  const timeString = now.toLocaleTimeString('id-ID', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
  const dateString = now.toLocaleDateString('id-ID');
  const waktuKirim = `${dateString} ${timeString} WIB`;

  // Tampilkan hasil
  const output = `
    <h3>Terima Kasih 🎉</h3>
    <p><strong>Nama:</strong> ${nama}</p>
    <p><strong>Tanggal Lahir:</strong> ${tanggal}</p>
    <p><strong>Jenis Kelamin:</strong> ${gender}</p>
    <p><strong>Pesan:</strong> ${pesan}</p>
    <p><strong>Waktu Kirim:</strong> ${waktuKirim}</p>
  `;
  result.innerHTML = output;

  // Simpan ke localStorage
  const data = { nama, tanggal, gender, pesan, waktuKirim };
  localStorage.setItem("formMessage", JSON.stringify(data));

  // Reset form
  document.getElementById("messageForm").reset();
});
