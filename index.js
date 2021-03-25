const heroSection = document.getElementById("hero-section");
const heroIntro = document.getElementById("hero-intro");
const heroMenu = document.getElementById("hero-menu");
const clickPrompt = document.getElementById("click");
const heroImage = document.getElementById("hero-img");
/* gibt die aktuelle Browserbreite aus */
let intViewportWidth = window.innerWidth;

heroSection.addEventListener("click", function change() {
    if (heroIntro.style.display === "none") {
        
    } else if (intViewportWidth >= 600 && intViewportWidth < 800) {
        heroImage.style.marginLeft = "0";
        heroMenu.style.marginRight = "40px";
        addTransition();
    }
    
    else if (intViewportWidth >= 800){
        heroImage.style.marginLeft = "0";
        heroMenu.style.marginRight = "150px";
        addTransition();
        
    } else {
        addTransition();
    }
})

function addTransition() {
    heroIntro.style.display = "none"; 
    heroMenu.classList.add('transitioned');
    clickPrompt.style.display = "none";
    heroImage.style.marginTop = "0";
}

