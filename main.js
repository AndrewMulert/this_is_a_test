setInterval(nameChange, 5000);

function nameChange() {
    const introText = document.getElementById("intro");
    introText.innerText = "Hello, Andrew";
}