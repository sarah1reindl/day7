function reduceOpacity() {
    const square = document.getElementById('square'); 
        square.style.opacity = square.style.opacity * 0.5; 
    }
    
    function resetOpacity() {
        const square = document.getElementById('square'); 
        square.style.opacity = 1; 
    }
    square.addEventListener('mouseenter', reduceOpacity);
    
    square.addEventListener('mouseleave', resetOpacity);

