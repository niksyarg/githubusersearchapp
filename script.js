const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const themeText = document.getElementById('theme-text');

themeToggle.addEventListener('click', () => {
    const html = document.documentElement;
    
    if (html.hasAttribute('data-theme')) {
    
        html.removeAttribute('data-theme');
        themeText.innerText = "DARK";
        themeIcon.src = "moon.png";
    } else {
        
        html.setAttribute('data-theme', 'dark');
        themeText.innerText = "LIGHT";
        themeIcon.src = "./002-sun.png"; 
    }
});