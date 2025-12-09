<script src="5-script.js"></script>
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu").querySelector("ul");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});
