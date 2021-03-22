const heroSection = document.getElementById("hero-section");
const heroIntro = document.getElementById("hero-intro");
const heroMenu = document.getElementById("hero-menu");

heroSection.addEventListener("click", function change() {
    if (heroIntro.style.display === "none") {
        
    } else {
        heroIntro.style.display = "none"; 
        heroMenu.style.display = "block";
    }
})
