let Rotation = 0;

function rotateCircle(step) {
    const circle = document.getElementById('circle');

    Rotation += step;

    circle.style.transform = `rotate(${Rotation}deg)`;
}
document.querySelectorAll(".rotate-button").forEach(button =>
button.addEventListener("click", ()=> rotateCircle(parseInt(button.value))))
