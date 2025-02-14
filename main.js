onload = () =>{
    document.body.classList.remove("container");
};

function startTyping(element, duration, delay, callback) {
    setTimeout(() => {
        element.style.opacity = "1";
        element.style.animation = `typing ${duration}s steps(30, end) forwards, blink 0.7s steps(2, start) 3`;
        setTimeout(() => {
            element.style.borderRight = "none"; 
            if (callback) callback();
        }, duration * 1000);
    }, delay * 1000);
}

const messages = [
    document.getElementById("message"),
    document.getElementById("message2"),
    document.getElementById("message3"),
    document.getElementById("message4"),
    document.getElementById("message5"),
    document.getElementById("message6")
];
const buttonHeart = document.querySelector(".heart-button");

let delay = 0;
messages.forEach((msg, index) => {
    startTyping(msg, 2.5, delay, () => {
        if (index === messages.length - 1) {
            console.log("Masuk sini")
            setTimeout(() => {
               buttonHeart.classList.remove("d-none");
            }, 1000);
        }
    });
    delay += 3
});

buttonHeart.addEventListener("click", () => {
    document.querySelector(".div-1").classList.add("d-none");
    document.querySelector(".flowers").classList.remove("d-none")
    document.querySelector(".flowers").classList.add("running");
})