const buttons = document.querySelectorAll('button');
buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        const quantityInput = this.parentElement.querySelector('input[type="text"]');
        const buttonImageSrc = this.querySelector('img').getAttribute('src'); 
        if (buttonImageSrc.includes('plus')) {
            quantityInput.value = parseInt(quantityInput.value) + 1;
        }
        if (buttonImageSrc.includes('minus') && parseInt(quantityInput.value) > 1) {
            quantityInput.value = parseInt(quantityInput.value) - 1;
        }  });});

const deleteButtons = document.querySelectorAll('.delete-btn');
deleteButtons.forEach(function(deleteButton) {
    deleteButton.addEventListener('click', function() {
        this.closest('.item').remove();
    });});
const likeButtons = document.querySelectorAll('.like-btn');
likeButtons.forEach(function(likeButton) {
    likeButton.addEventListener('click', function() {
        this.classList.toggle('is-active');
    });});
