const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click",() =>{
    navLinks.classList.toggle("active");
    menuToggle.textContent = navLinks.classList.contains("active") ? "✖" : "☰";
});

document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener("click",function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behaviour:"smooth"
        });
        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";
    });

});

function downloadResume(){
    const link = document.createElement("a");
    link.href = "Resume(Azeem).pdf";
    link.download = "Syed_Azeem_Haider_Resume.pdf";
    link.click();
}

const contactForm = document.querySelector(".contact-form");
if(contactForm){
    contactForm.addEventListener("submit",(e) =>{
        e.preventDefault();
        alert("Thanks for reaching out! I will get back to you soon");
        contactForm.reset();
    });
}

const projectButtons = document.querySelectorAll('.view-project');
projectButtons.forEach(button =>{
    button.addEventListener('click',() =>{
        const link = button.getAttribute('data-link');
        window.open(link,'_blank');
    });
});
