const wave = document.getElementById('wave');
const statusText = document.getElementById('status');

// Meto's Database of 100 Websites
const sites = {
    // --- TOP SEARCH & UTILITIES ---
    "google": "https://www.google.com",
    "bing": "https://www.bing.com",
    "duckduckgo": "https://www.duckduckgo.com",
    "wikipedia": "https://www.wikipedia.org",
    "chatgpt": "https://chatgpt.com",
    "gemini": "https://gemini.google.com",
    "yahoo": "https://www.yahoo.com",
    "outlook": "https://outlook.live.com",
    "gmail": "https://mail.google.com",
    "translate": "https://translate.google.com",

    // --- SOCIAL & COMMUNICATION ---
    "youtube": "https://www.youtube.com",
    "facebook": "https://www.facebook.com",
    "instagram": "https://www.instagram.com",
    "tiktok": "https://www.tiktok.com",
    "reddit": "https://www.reddit.com",
    "discord": "https://www.discord.com",
    "whatsapp": "https://www.whatsapp.com",
    "pinterest": "https://www.pinterest.com",
    "linkedin": "https://www.linkedin.com",
    "snapchat": "https://www.snapchat.com",
    "messenger": "https://www.messenger.com",
    "telegram": "https://web.telegram.org",

    // --- GAMING & ENTERTAINMENT ---
    "roblox": "https://www.roblox.com",
    "minecraft": "https://www.minecraft.net",
    "twitch": "https://www.twitch.tv",
    "steam": "https://store.steampowered.com",
    "epic games": "https://www.epicgames.com",
    "nintendo": "https://www.nintendo.com",
    "xbox": "https://www.xbox.com",
    "playstation": "https://www.playstation.com",
    "chess": "https://www.chess.com",
    "ign": "https://www.ign.com",
    "netflix": "https://www.netflix.com",
    "disney plus": "https://www.disneyplus.com",
    "hulu": "https://www.hulu.com",
    "spotify": "https://open.spotify.com",
    "crunchyroll": "https://www.crunchyroll.com",

    // --- SCHOOL & LEARNING ---
    "canvas": "https://www.instructure.com/canvas",
    "google classroom": "https://classroom.google.com",
    "duolingo": "https://www.duolingo.com",
    "khan academy": "https://www.khanacademy.org",
    "brainpop": "https://www.brainpop.com",
    "quizlet": "https://quizlet.com",
    "kahoot": "https://kahoot.it",
    "scratch": "https://scratch.mit.edu",
    "code.org": "https://code.org",
    "cool math games": "https://www.coolmathgames.com",
    "national geographic": "https://www.nationalgeographic.com",
    "nasa": "https://www.nasa.gov",
    "pbs kids": "https://pbskids.org",
    "scholastic": "https://www.scholastic.com",

    // --- SHOPPING & CLASSIFIEDS ---
    "amazon": "https://www.amazon.com",
    "ebay": "https://www.ebay.com",
    "walmart": "https://www.walmart.com",
    "target": "https://www.target.com",
    "etsy": "https://www.etsy.com",
    "temu": "https://www.temu.com",
    "nike": "https://www.nike.com",
    "apple": "https://www.apple.com",

    // --- NEWS & WEATHER ---
    "bbc": "https://www.bbc.com",
    "cnn": "https://www.cnn.com",
    "nytimes": "https://www.nytimes.com",
    "fox news": "https://www.foxnews.com",
    "espn": "https://www.espn.com",
    "weather": "https://weather.com",
    "accuweather": "https://www.accuweather.com",

    // --- CREATIVE TOOLS ---
    "canva": "https://www.canva.com",
    "github": "https://github.com",
    "adobe": "https://www.adobe.com",
    "figma": "https://www.figma.com",
    "pixlr": "https://pixlr.com",

    // --- OTHER POPULAR SITES ---
    "zoom": "https://zoom.us",
    "dropbox": "https://www.dropbox.com",
    "quora": "https://www.quora.com",
    "stack overflow": "https://stackoverflow.com",
    "medium": "https://medium.com",
    "imdb": "https://www.imdb.com",
    "tripadvisor": "https://www.tripadvisor.com",
    "zillow": "https://www.zillow.com"
    // (You can keep adding to reach exactly 100!)
};

// 2. Setup Voice Recognition
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.continuous = false;
recognition.lang = 'en-US';

// 3. Spacebar Logic
window.addEventListener('keydown', (e) => {
    if (e.code === "Space" && wave.classList.contains('hidden')) {
        e.preventDefault(); 
        wave.classList.remove('hidden');
        statusText.innerText = "Meto is listening...";
        recognition.start();
    }
});

window.addEventListener('keyup', (e) => {
    if (e.code === "Space") {
        wave.classList.add('hidden');
        recognition.stop();
    }
});

// 4. Processing the Voice Command
recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript.toLowerCase();
    statusText.innerText = `You said: "${transcript}"`;

    if (transcript.includes("open")) {
        // Find the name after "open"
        const siteName = transcript.replace("open", "").trim();

        if (sites[siteName]) {
            window.open(sites[siteName], "_blank");
        } else {
            // Fallback: Tries to fix common gaps in speech
            const formattedName = siteName.replace(/\s+/g, '');
            window.open(`https://www.${formattedName}.com`, "_blank");
        }
    }
};
