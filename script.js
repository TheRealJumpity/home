// --- METO KNOWLEDGE DATABASE ---
// Add thousands of lines here to make Meto smarter!
const knowledgeBase = [
    "Initializing Meto System...",
    "Scanning galaxy for data...",
    "Connection stable. I am ready to assist.",
    "Did you know? Light travels at 299,792 kilometers per second.",
    "System Update: All core modules are performing at 100% efficiency.",
    "Analyzing your request... Meto is online and thinking."
    // KEEP ADDING MORE SENTENCES HERE!
];

const statusText = document.getElementById('status-msg');

function speak(text) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.rate = 0.9; // Makes Meto sound more serious
    speech.pitch = 0.8; 
    window.speechSynthesis.speak(speech);
}

// This makes Meto start talking automatically when the page loads
window.onload = () => {
    let index = 0;
    
    // Meto will cycle through the database and speak
    setInterval(() => {
        if (index < knowledgeBase.length) {
            const line = knowledgeBase[index];
            statusText.innerText = line;
            speak(line);
            index++;
        } else {
            index = 0; // Restart the loop
        }
    }, 5000); // Meto speaks a new line every 5 seconds
};
