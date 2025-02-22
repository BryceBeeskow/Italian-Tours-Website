const button = document.getElementById('myButton');
const message = document.getElementById('message');

button.addEventListener('click', function() {
    // Change the text inside the paragraph when the button is clicked
    message.textContent = "Save10%";
});

