document.addEventListener('DOMContentLoaded', function() {
    console.log('페이지가 로드되었습니다.');
    showSlides(slideIndex);
    window.addEventListener('scroll', checkScroll);
});

function showWelcomeMessage() {
    const welcomeMessage = document.createElement('div');
    welcomeMessage.textContent = '노란색 웹사이트에 오신 것을 환영합니다!';
    welcomeMessage.style.position = 'fixed';
    welcomeMessage.style.top = '50%';
    welcomeMessage.style.left = '50%';
    welcomeMessage.style.transform = 'translate(-50%, -50%)';
    welcomeMessage.style.backgroundColor = '#ffcc00';
    welcomeMessage.style.padding = '20px';
    welcomeMessage.style.borderRadius = '10px';
    welcomeMessage.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    welcomeMessage.style.zIndex = '1000';
    welcomeMessage.style.fontSize = '1.2em';
    welcomeMessage.style.textAlign = 'center';
    welcomeMessage.style.animation = 'fadeOut 2s forwards';
    document.body.appendChild(welcomeMessage);

    setTimeout(() => {
        document.body.removeChild(welcomeMessage);
    }, 2000);
}

let slideIndex = 0;

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i
