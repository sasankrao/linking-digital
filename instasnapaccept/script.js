const accept = document.querySelector('.accept');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const acceptRect = accept.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();
document.getElementById('openPageButton').addEventListener('click', function() {
    window.open('ok.html', '_blank'); 
});

noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (acceptRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (acceptRect.height - noBtnRect.height)) + 1;
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});