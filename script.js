let count = 0;
const button = document.getElementById('clickButton');
const message = document.getElementById('message');

button.addEventListener('click', function() {
    count++;
    if (count >= 15) {
        button.disabled = true;  
        message.textContent = "Maximum clicks reached!";
    }
});
