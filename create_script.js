const canvas = document.getElementById('designCanvas');
const ctx = canvas.getContext('2d');

let currentPattern = 'none';
let currentColor = '#ff0000';
let currentFabric = 'cotton';
let currentView = 'front';
let currentClothingType = 'tshirt';
let currentSleeveStyle = 'none';

document.getElementById('imageLoader').addEventListener('change', handleImage, false);

function handleImage(e) {
    const reader = new FileReader();
    reader.onload = function(event) {
        const img = new Image();
        img.onload = function() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            applyCustomizations();
        }
        img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);
}

function addText() {
    const text = prompt('Enter text to add:');
    if (text) {
        ctx.font = '30px Arial';
        ctx.fillStyle = currentColor;
        ctx.fillText(text, 50, 50);
    }
}

function changePattern() {
    currentPattern = document.getElementById('patternSelector').value;
    applyCustomizations();
}

function changeColor() {
    currentColor = document.getElementById('colorPicker').value;
    applyCustomizations();
}

function changeFabric() {
    currentFabric = document.getElementById('fabricSelector').value;
    applyCustomizations();
}

function changeView() {
    currentView = document.getElementById('viewSelector').value;
    applyCustomizations();
}

function selectClothingType(type) {
    currentClothingType = type;
    applyCustomizations();
}

function selectSleeveStyle(style) {
    currentSleeveStyle = style;
    applyCustomizations();
}

function applyCustomizations() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Load the base clothing image based on the selected type and view
