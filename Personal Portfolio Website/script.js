window.addEventListener("scroll", () => {
    let elements = document.querySelectorAll(".project-card");

    elements.forEach(el => {
        let position = el.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;

        if(position < screenHeight - 100){
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
});
