document.querySelector(".wrapper").addEventListener("click", function() {
    this.classList.toggle("open");


    const buttons = document.querySelector(".buttons");
    if (this.classList.contains("open")) {
        buttons.style.display = "flex";
    } else {
        buttons.style.display = "none";
    }
});
document.querySelector(".btn:first-child").addEventListener("click", function () {
    createHearts(10);
});

document.querySelector(".btn:last-child").addEventListener("click", function () {
    window.location.href = "https://www.wikihow.com/Love-Someone"; 
});

function createHearts(count) {
    for (let i = 0; i < count; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";

        const x = Math.random() * window.innerWidth - 50; 
        const y = Math.random() * window.innerHeight - 50; 

        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;

        document.body.appendChild(heart);

        
        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
}
