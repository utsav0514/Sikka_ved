document.addEventListener("DOMContentLoaded", function () {

    setTimeout(() => {
        alert("Welcome to Sikka_Ved - Make every rupee count!");
    }, 500); 


    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(btn => {
        btn.addEventListener("mouseover", () => {
            btn.style.transform = "scale(1.05)";
            btn.style.transition = "transform 0.3s ease-in-out";
        });

        btn.addEventListener("mouseout", () => {
            btn.style.transform = "scale(1)";
        });
    });
});
