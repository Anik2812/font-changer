const fonts = [
    'Arial, sans-serif', 'Helvetica, sans-serif', 'Georgia, serif', 'Times New Roman, serif',
    'Courier New, monospace', 'Verdana, sans-serif', 'Trebuchet MS, sans-serif',
    'Comic Sans MS, cursive', 'Impact, sans-serif', 'Lucida Console, monospace',
    'Palatino, serif', 'Garamond, serif', 'Bookman, serif', 'Avant Garde, sans-serif',
    'Calibri, sans-serif', 'Candara, sans-serif', 'Futura, sans-serif', 'Geneva, sans-serif',
    'Optima, sans-serif', 'Cambria, serif', 'Consolas, monospace', 'Franklin Gothic, sans-serif',
    'Rockwell, serif', 'Tahoma, sans-serif', 'Segoe UI, sans-serif'
];

const funFacts = [
    "The first computer bug was an actual bug.",
    "The original name for Windows was Interface Manager.",
    "The first computer mouse was made of wood.",
    "The first domain name ever registered was Symbolics.com.",
    "The @ symbol is called an 'amphora' in Italian.",
    "The first tweet was 'just setting up my twttr' by Jack Dorsey.",
    "The first computer virus was created in 1983 as an experiment.",
    "The QWERTY keyboard layout was designed to slow down typing.",
    "The first webcam was used to monitor a coffee pot.",
    "The word 'robot' comes from the Czech word 'robota' meaning 'forced labor'."
];

function getRandomFont() {
    return fonts[Math.floor(Math.random() * fonts.length)];
}

function getRandomFact() {
    return funFacts[Math.floor(Math.random() * funFacts.length)];
}

function applyRandomFont() {
    const randomFont = getRandomFont();
    document.body.style.fontFamily = randomFont;
    document.getElementById('font-name').textContent = randomFont.split(',')[0];
    document.getElementById('font-name').classList.add('bounce');
    setTimeout(() => {
        document.getElementById('font-name').classList.remove('bounce');
    }, 1000);
}

function changeBackgroundColor() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
}

function updateFact() {
    const factElement = document.getElementById('fact');
    factElement.textContent = getRandomFact();
    factElement.classList.add('bounce');
    setTimeout(() => {
        factElement.classList.remove('bounce');
    }, 1000);
}

window.onload = function() {
    applyRandomFont();
    updateFact();

    document.getElementById('change-font').addEventListener('click', () => {
        applyRandomFont();
        changeBackgroundColor();
    });

    document.getElementById('new-fact').addEventListener('click', updateFact);
};