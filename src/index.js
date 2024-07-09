// *********** Javascript for help popup *************
document.addEventListener("DOMContentLoaded", function() {
    // Get the instructions popup and the button to show instructions
    var indexHelpPopup = document.getElementById("indexHelpPopup");
    var indexShowHelpBtn = document.getElementById("indexShowHelp");
    
    var indexPopupCloseBtn = document.getElementById("indexPopupClose");
    
    indexShowHelpBtn.addEventListener("click", function() {
        indexHelpPopup.style.display = "block";
    });
    
    // When the user clicks on the close button, hide the instructions popup
    indexPopupCloseBtn.addEventListener("click", function() {
        indexHelpPopup.style.display = "none";
    });
    
    window.addEventListener("click", function(event) {
        if (event.target == indexHelpPopup) {
            indexHelpPopup.style.display = "none";
        }
    });
});


// *********** JavaScript for carousel functionality ***********
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slides = document.querySelector('.slides');

prevButton.addEventListener('click', () => {
    slides.scrollBy({
        left: -slides.offsetWidth,
        behavior: 'smooth'
    });
});

nextButton.addEventListener('click', () => {
    slides.scrollBy({
        left: slides.offsetWidth,
        behavior: 'smooth'
    });
});

// ************ Hover colour change ******************

document.addEventListener('DOMContentLoaded', () => {
    const leftHalf = document.querySelector('.left-half');
    const rightHalf = document.querySelector('.right-half');

    leftHalf.addEventListener('mouseenter', () => {
        rightHalf.style.backgroundColor = '#FFA4FB'; 
    });

    leftHalf.addEventListener('mouseleave', () => {
        rightHalf.style.backgroundColor = ''; 
    });
});

// ************ Smooth scroll js to research projects *********
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
} 