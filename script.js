/*
let image = document.createElement("video");
image.src = "assets/image/hero1.mp4";
image.controls=true;
image.height=300;
image.width=500;
document.getElementById('multi').append(image);

*/
document.getElementById('cta-button').addEventListener('click', () => {
    alert('Welcome! Let\'s get started.');
});

document.getElementById('contact-form').addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thank you for contacting us!');
});

