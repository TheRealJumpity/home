// Build the Dropdown Menu from your 'sites' database
const menu = document.getElementById('site-list');

for (const name in sites) {
    const opt = document.createElement('option');
    opt.value = sites[name];
    opt.textContent = name.toUpperCase(); 
    menu.appendChild(opt);
}

// Flash the instruction text to help users
const helpText = document.getElementById('instruction');
setInterval(() => {
    helpText.style.opacity = helpText.style.opacity === '0.5' ? '1' : '0.5';
}, 800);
