document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector("#menu-icon");
  const navbar = document.querySelector(".header .navbar");

  menuIcon.addEventListener("click", function () {
    navbar.classList.toggle("active");
  });

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      document.querySelector(".header").classList.add("scrolled");
    } else {
      document.querySelector(".header").classList.remove("scrolled");
    }
  });
});

const typingElement = document.getElementById("typing");
const titles = [
  "Graphic Design",
  "Frontend Development",
  "UI / UX Design",
  "Contact Manager",
  "Project Tester",
];
let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentTitle = titles[titleIndex];
  if (isDeleting) {
    typingElement.textContent = currentTitle.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
      setTimeout(type, 500);
      return;
    }
  } else {
    typingElement.textContent = currentTitle.substring(0, charIndex++);
    if (charIndex === currentTitle.length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  }
  setTimeout(type, isDeleting ? 100 : 150);
}

document.addEventListener("DOMContentLoaded", type);
let lastTime = 0;

function type(time) {
  if (time - lastTime > (isDeleting ? 100 : 150)) {
    const currentTitle = titles[titleIndex];
    typingElement.textContent = isDeleting
      ? currentTitle.substring(0, charIndex--)
      : currentTitle.substring(0, charIndex++);

    if (charIndex < 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
    } else if (charIndex === currentTitle.length) {
      isDeleting = true;
      setTimeout(() => requestAnimationFrame(type), 1000);
      return;
    }

    lastTime = time;
  }
  requestAnimationFrame(type);
}

requestAnimationFrame(type);
document.querySelector("#contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for contacting me! I'll get back to you soon.");
});
