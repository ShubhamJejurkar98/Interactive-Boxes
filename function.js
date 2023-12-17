function toggleOptions(boxId) {
    let box = document.getElementById(boxId);
    let options = document.getElementById(boxId + 'Options');
    
    if (box.classList.contains('expanded')) {
        box.classList.remove('expanded');
        options.style.display = 'none';
    } else {
        box.classList.add('expanded');
        options.style.display = 'flex';
    }
}

function changeColor(boxId, color) {
    let box = document.getElementById(boxId);
    box.style.backgroundColor = color;
}

// function changeSize(boxId, size) {
//     const box = document.getElementById(boxId);
//     box.style.height = size === 'small' ? '100px' : size === 'medium' ? '150px' : '200px';
// }

// Stopping click event propagation on options
document.querySelectorAll('.options').forEach(option => {
    option.addEventListener('click', event => {
        event.stopPropagation();
    });
});
