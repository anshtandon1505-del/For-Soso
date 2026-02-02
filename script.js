const container = document.querySelector('.container');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const successScreen = document.getElementById('successScreen');
const mainEnvelope = document.getElementById('mainEnvelope');

// Open the envelope
container.addEventListener('click', (e) => {
    // Only open if clicking the envelope itself, not the buttons
    if (e.target.tagName !== 'BUTTON') {
        container.classList.add('active');
    }
});

// Runaway No Button Logic
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 100);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 100);
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// Click No warning
noBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    alert("⚠️ SYSTEM ALERT: Jojo is not allowed to say No! Please select 'YES!' ❤️");
});

// Success transition
yesBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    mainEnvelope.classList.add('hidden');
    successScreen.classList.remove('hidden');
});