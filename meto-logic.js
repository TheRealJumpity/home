const waveIcon = document.getElementById('wave');
const infoDisplay = document.getElementById('status');

const VoiceMagic = window.SpeechRecognition || window.webkitSpeechRecognition;
const listener = new VoiceMagic();
listener.lang = 'en-US';

// Listen for the Spacebar
window.addEventListener('keydown', (e) => {
    if (e.code === "Space" && waveIcon.classList.contains('hidden')) {
        e.preventDefault(); 
        waveIcon.classList.remove('hidden');
        infoDisplay.innerText = "Listening...";
        listener.start();
    }
});

window.addEventListener('keyup', (e) => {
    if (e.code === "Space") {
        waveIcon.classList.add('hidden');
        listener.stop();
    }
});

// Open the website
listener.onresult = (event) => {
    const heard = event.results[0][0].transcript.toLowerCase();
    infoDisplay.innerText = `Meto heard: ${heard}`;

    if (heard.includes("open")) {
        const target = heard.replace("open", "").trim();
        const url = sites[target] || `https://www.${target.replace(/\s+/g, '')}.com`;
        window.open(url, "_blank");
    }
};
