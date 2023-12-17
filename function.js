function toggleOptions(boxId) {
    var box = document.getElementById(boxId);
    var options = document.getElementById(boxId + 'Options');
    
    if (box.classList.contains('expanded')) {
        box.classList.remove('expanded');
        options.style.display = 'none';
    } else {
        box.classList.add('expanded');
        options.style.display = 'flex';
    }
}

function changeColor(boxId, color) {
    var box = document.getElementById(boxId);
    box.style.backgroundColor = color;
}

// function changeSize(boxId, size) {
//     var box = document.getElementById(boxId);
//     box.style.height = size === 'small' ? '100px' : size === 'medium' ? '150px' : '200px';
// }

// Stopping click event propagation on options
document.querySelectorAll('.options').forEach(function (option) {
    option.addEventListener('click', function (event) {
        event.stopPropagation();
    });
});