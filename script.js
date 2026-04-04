const btn = document.getElementById('mic-btn');
const text = document.getElementById('response-text');

// This makes Meto speak
function speak(message) {
    const speech = new SpeechSynthesisUtterance(message);
    window.speechSynthesis.speak(speech);
}

// This makes Meto listen
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

btn.addEventListener('click', () => {
    recognition.start(); // Asks for mic permission and starts listening
    text.innerText = "Meto is listening...";
});

recognition.onresult = (event) => {
    const command = event.results[0][0].transcript;
    text.innerText = "You said: " + command;
    
    // Meto's reply
    const reply = "I heard you say " + command + ". I am Meto, your new assistant!";
    speak(reply);
};
