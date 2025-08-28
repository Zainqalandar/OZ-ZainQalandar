
    const messages = [
        "WE DON'T SELL JEWELRY - WE SELL ENERGY",
        "CRAFTED WITH PASSION, WORN WITH POWER",
        "JEWELRY THAT SPEAKS YOUR SOUL",
        "ENERGY IN EVERY PIECE"
    ];

    const textElement = document.querySelector(".navbar-left p");
    const leftArrow = document.querySelector(".fa-chevron-left");
    const rightArrow = document.querySelector(".fa-chevron-right");

    function updateText() {
        textElement.textContent = messages[currentIndex];
    }


    leftArrow.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + messages.length) % messages.length;
        updateText();
    });

    rightArrow.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % messages.length;
        updateText();
    });