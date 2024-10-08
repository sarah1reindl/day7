let clickCount = 0; 
function changeEyeColor() {
    const leftIris = document.querySelector('.eye-left-iris');
    const rightIris = document.querySelector('.eye-right-iris');
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    
    leftIris.style.fill = randomColor;
    rightIris.style.fill = randomColor;
}
function displayCursorCoordinates(event) {
    const screenText = document.getElementById('screen-text');
    screenText.textContent = "X: " + event.clientX + ", Y: " + event.clientY;
}
function showSpeechBubble() {
    const speechBubble = document.getElementById('speech-bubble');
    speechBubble.textContent = "Ouch, that hurts!";
    speechBubble.style.display = 'block'; 
    setTimeout(() => {
        speechBubble.style.display = 'none';
    }, 2000);
}
function handleInput() {
    const screenText = document.getElementById('screen-text');
    screenText.textContent = "Don't worry, I'll take care of it!";
  
    setTimeout(() => {
        screenText.textContent = "Bip bip bip !";
    }, 2000);
}
document.getElementById('robot').addEventListener('mousemove', displayCursorCoordinates);
document.getElementById('robot').addEventListener('click', showSpeechBubble);
document.getElementById('robot-input').addEventListener('input', handleInput);
document.querySelectorAll('.eye-left-pupil, .eye-right-pupil').forEach(pupil => {
    pupil.addEventListener('click', () => {
        clickCount++; 
        if (clickCount >= 10) {
            changeEyeColor(); 
            clickCount = 0; 
        } });});
