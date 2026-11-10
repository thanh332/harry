
// ==========================================
// HARRY POTTER – MAGISCHE WEBSITE
// ==========================================

// FILM-INFORMATIONEN

const films = {
    1: {
        title: "Harry Potter und der Stein der Weisen",
        icon: "⚡",
        story: "Harry erfährt an seinem elften Geburtstag, dass er ein Zauberer ist. Er beginnt seine Ausbildung in Hogwarts und lernt Ron und Hermine kennen. Gemeinsam entdecken sie ein Geheimnis rund um den Stein der Weisen.",
        place: "Hogwarts und die Winkelgasse",
        special: "Harrys erstes Schuljahr",
        fact: "Der erste Film kam 2001 in die Kinos."
    },
    2: {
        title: "Harry Potter und die Kammer des Schreckens",
        icon: "🐍",
        story: "In Hogwarts passieren unheimliche Dinge: Schüler werden versteinert und eine geheimnisvolle Stimme ist zu hören. Harry versucht herauszufinden, was sich hinter der Legende der Kammer des Schreckens verbirgt.",
        place: "Die Kammer des Schreckens",
        special: "Das Geheimnis der alten Schule",
        fact: "In diesem Film lernen wir Dobby kennen, einen Hauselfen."
    },
    3: {
        title: "Harry Potter und der Gefangene von Askaban",
        icon: "🐺",
        story: "Der geheimnisvolle Sirius Black ist aus Askaban entkommen. Harry erfährt immer mehr über seine Familie und die Vergangenheit seiner Eltern. Auch die Zeit selbst spielt eine wichtige Rolle.",
        place: "Hogsmeade und Hogwarts",
        special: "Der Zeitumkehrer",
        fact: "Der Hippogreif Seidenschnabel gehört zu den besonderen magischen Wesen dieses Films."
    },
    4: {
        title: "Harry Potter und der Feuerkelch",
        icon: "🏆",
        story: "Hogwarts richtet das Trimagische Turnier aus. Drei Zauberschulen treten gegeneinander an. Unerwartet wird auch Harry ausgewählt und muss sich drei gefährlichen Aufgaben stellen.",
        place: "Hogwarts und das Quidditch-Stadion",
        special: "Das Trimagische Turnier",
        fact: "Die drei Aufgaben verlangen Mut, Geschick und Köpfchen."
    },
    5: {
        title: "Harry Potter und der Orden des Phönix",
        icon: "🔮",
        story: "Harry und seine Freunde merken, dass die Zauberwelt nicht auf die Warnungen vor Voldemort hören möchte. Sie gründen eine geheime Lerngruppe, um gemeinsam Zaubersprüche zu üben.",
        place: "Raum der Wünsche",
        special: "Dumbledores Armee",
        fact: "Der Raum der Wünsche erscheint nur, wenn jemand ihn wirklich braucht."
    },
    6: {
        title: "Harry Potter und der Halbblutprinz",
        icon: "🧪",
        story: "Harry entdeckt ein altes Zaubertrankbuch mit ungewöhnlichen Notizen. Gleichzeitig erfährt er mehr über Voldemorts Vergangenheit und die Geheimnisse seiner Macht.",
        place: "Zaubertrank-Klassenzimmer",
        special: "Das geheimnisvolle Zaubertrankbuch",
        fact: "Der Film zeigt mehrere wichtige Erinnerungen an Voldemorts Jugend."
    },
    7: {
        title: "Harry Potter und die Heiligtümer des Todes – Teil 1",
        icon: "🏕️",
        story: "Harry, Ron und Hermine machen sich auf eine Reise ausserhalb von Hogwarts. Sie suchen nach den Horkruxen und müssen viele Rätsel lösen. Ihre Freundschaft wird dabei auf die Probe gestellt.",
        place: "Verschiedene Orte in Grossbritannien",
        special: "Die Suche nach den Horkruxen",
        fact: "Dieser Film ist der erste Teil des grossen Finales."
    },
    8: {
        title: "Harry Potter und die Heiligtümer des Todes – Teil 2",
        icon: "🏰",
        story: "Die Geschichte erreicht ihren Höhepunkt. Hogwarts wird zum Schauplatz der letzten grossen Auseinandersetzung. Harry muss die letzten Geheimnisse aufdecken und wichtige Entscheidungen treffen.",
        place: "Hogwarts",
        special: "Das grosse Finale",
        fact: "Der Film erschien 2011 und beendet die ursprüngliche Filmreihe."
    }
};


// FILM-MODAL

const filmModal = document.getElementById("film-modal");

function openFilm(id) {
    const film = films[id];
    if (!film) return;

    document.getElementById("film-modal-number").textContent =
        "DIE MAGISCHE FILMREIHE · FILM " + String(id).padStart(2, "0");

    document.getElementById("film-modal-icon").textContent = film.icon;
    document.getElementById("film-modal-title").textContent = film.title;
    document.getElementById("film-modal-story").textContent = film.story;
    document.getElementById("film-modal-place").textContent = film.place;
    document.getElementById("film-modal-special").textContent = film.special;
    document.getElementById("film-modal-fact").textContent = film.fact;

    filmModal.classList.add("show");
    document.body.style.overflow = "hidden";
}

function closeFilm() {
    filmModal.classList.remove("show");
    document.body.style.overflow = "";
}

document.querySelectorAll("[data-open-film]").forEach(button => {
    button.addEventListener("click", () => {
        openFilm(button.dataset.openFilm);
    });
});

document.getElementById("film-close").addEventListener("click", closeFilm);
document.getElementById("film-ok").addEventListener("click", closeFilm);

filmModal.addEventListener("click", event => {
    if (event.target === filmModal) closeFilm();
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeFilm();
});


// MAGISCHE GEGENSTÄNDE

const magicObjects = {
    wand: "🪄 Ein Zauberstab hilft Hexen und Zauberern, ihre Magie zu lenken. Verschiedene Zauberstäbe bestehen aus unterschiedlichen Holzarten und Kernen.",
    map: "🗺️ Die Karte des Rumtreibers zeigt Hogwarts und die Positionen von Personen im Schloss. Sie ist voller kleiner Geheimnisse.",
    cloak: "🧥 Der Tarnumhang macht seinen Träger unsichtbar. Er ist einer der geheimnisvollsten magischen Gegenstände.",
    snitch: "🏆 Der goldene Schnatz ist ein winziger, schneller Ball beim Quidditch. Er besitzt kleine Flügel und ist schwer zu fangen.",
    potion: "🧪 Zaubertränke können ganz unterschiedliche Wirkungen haben. In Hogwarts lernen die Schüler, Zutaten richtig zu kombinieren.",
    owl: "🦉 Eulen transportieren in der Zauberwelt Briefe und Nachrichten. Hedwig ist Harrys berühmte Schneeeule."
};

document.querySelectorAll("[data-magic]").forEach(button => {
    button.addEventListener("click", () => {
        const key = button.dataset.magic;
        document.getElementById("magic-feedback").textContent = magicObjects[key];
        createSparkles(button);
    });
});


// DAS HAUS-QUIZ

const questions = [
    {
        question: "Was ist dir besonders wichtig?",
        answers: [
            { text: "Mut und Abenteuer", house: "gryffindor" },
            { text: "Erfolg und Ziele", house: "slytherin" },
            { text: "Wissen und Kreativität", house: "ravenclaw" },
            { text: "Freundschaft und Zusammenhalt", house: "hufflepuff" }
        ]
    },
    {
        question: "Du entdeckst eine verschlossene Tür. Was machst du?",
        answers: [
            { text: "Ich wage mich hinein!", house: "gryffindor" },
            { text: "Ich suche einen cleveren Weg hinein.", house: "slytherin" },
            { text: "Ich untersuche zuerst das Schloss.", house: "ravenclaw" },
            { text: "Ich frage, ob jemand Hilfe braucht.", house: "hufflepuff" }
        ]
    },
    {
        question: "Welche magische Fähigkeit wäre dir am liebsten?",
        answers: [
            { text: "Besonders mutig sein", house: "gryffindor" },
            { text: "Mich in jeder Situation durchsetzen", house: "slytherin" },
            { text: "Alles verstehen und lernen können", house: "ravenclaw" },
            { text: "Menschen und Tiere besonders gut verstehen", house: "hufflepuff" }
        ]
    },
    {
        question: "Was würden deine Freunde über dich sagen?",
        answers: [
            { text: "Du bist mutig!", house: "gryffindor" },
            { text: "Du bist zielstrebig!", house: "slytherin" },
            { text: "Du hast tolle Ideen!", house: "ravenclaw" },
            { text: "Auf dich kann man zählen!", house: "hufflepuff" }
        ]
    }
];

const houseResults = {
    gryffindor: {
        name: "GRYFFINDOR",
        icon: "🦁",
        description: "Der sprechende Hut sieht in dir eine mutige Persönlichkeit! Du bist bereit, Neues zu wagen und für andere einzustehen. Dein Haus ist Gryffindor!"
    },
    slytherin: {
        name: "SLYTHERIN",
        icon: "🐍",
        description: "Du bist ehrgeizig, clever und hast deine Ziele im Blick. Du findest gerne eigene Wege und gibst nicht so schnell auf. Willkommen in Slytherin!"
    },
    ravenclaw: {
        name: "RAVENCLAW",
        icon: "🦅",
        description: "Du bist neugierig, kreativ und liebst neue Ideen. Dein Verstand ist deine besondere Stärke. Ravenclaw könnte genau dein Haus sein!"
    },
    hufflepuff: {
        name: "HUFFLEPUFF",
        icon: "🦡",
        description: "Du bist freundlich, loyal und fair. Du hältst zu deinen Freunden und bist jemand, auf den man zählen kann. Der Hut schickt dich nach Hufflepuff!"
    }
};

let currentQuestion = 0;
let housePoints = {
    gryffindor: 0,
    slytherin: 0,
    ravenclaw: 0,
    hufflepuff: 0
};

function showQuestion() {
    const question = questions[currentQuestion];

    document.getElementById("quiz-counter").textContent =
        `FRAGE ${currentQuestion + 1} VON ${questions.length}`;

    document.getElementById("quiz-question").textContent = question.question;

    document.getElementById("quiz-progress-bar").style.width =
        ((currentQuestion + 1) / questions.length * 100) + "%";

    const options = document.getElementById("quiz-options");
    options.innerHTML = "";

    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.className = "quiz-option";
        button.textContent = answer.text;

        button.addEventListener("click", () => {
            housePoints[answer.house]++;
            currentQuestion++;

            if (currentQuestion < questions.length) {
                showQuestion();
            } else {
                showQuizResult();
            }
        });

        options.appendChild(button);
    });
}

function showQuizResult() {
    document.getElementById("quiz-area").style.display = "none";

    const result = document.getElementById("quiz-result");
    result.classList.remove("hidden");

    const highest = Math.max(...Object.values(housePoints));

    const winners = Object.keys(housePoints).filter(
        house => housePoints[house] === highest
    );

    const chosen = winners[Math.floor(Math.random() * winners.length)];
    const house = houseResults[chosen];

    document.getElementById("quiz-result-icon").textContent = house.icon;
    document.getElementById("quiz-result-house").textContent = house.name;
    document.getElementById("quiz-result-text").textContent = house.description;

    createSparkles(document.querySelector(".quiz-card"), 25);
}

function restartQuiz() {
    currentQuestion = 0;

    housePoints = {
        gryffindor: 0,
        slytherin: 0,
        ravenclaw: 0,
        hufflepuff: 0
    };

    document.getElementById("quiz-area").style.display = "block";
    document.getElementById("quiz-result").classList.add("hidden");

    showQuestion();
}

document.getElementById("quiz-restart").addEventListener("click", restartQuiz);

showQuestion();


// FUNKEN BEIM KLICKEN

function createSparkles(element, amount = 8) {
    const rect = element.getBoundingClientRect();
    const layer = document.getElementById("sparkle-layer");

    for (let i = 0; i < amount; i++) {
        const sparkle = document.createElement("span");
        sparkle.className = "sparkle";
        sparkle.textContent = ["✨", "⭐", "✦", "💫"][Math.floor(Math.random() * 4)];

        sparkle.style.left = (rect.left + Math.random() * rect.width) + "px";
        sparkle.style.top = (rect.top + Math.random() * rect.height) + "px";

        layer.appendChild(sparkle);

        setTimeout(() => sparkle.remove(), 1100);
    }
}


// EASTER EGG: DIE GEHEIME NACHRICHT

const secretMessages = [
    "🦉 Eine Eule hat dir gerade eine Nachricht gebracht!",
    "✨ Du hast einen geheimen Zauber entdeckt!",
    "🏰 Irgendwo in Hogwarts gibt es eine verborgene Tür ...",
    "🪄 Accio! Ein bisschen Magie für dich!",
    "🍬 Zeit für eine Bertie-Botts-Bohne!"
];

let clickCount = 0;

document.addEventListener("click", event => {
    if (event.target.closest("button, a")) return;

    clickCount++;

    createSparkles({
        getBoundingClientRect: () => ({
            left: event.clientX,
            top: event.clientY,
            width: 1,
            height: 1
        })
    }, 3);

    if (clickCount >= 7) {
        clickCount = 0;

        const message = secretMessages[
            Math.floor(Math.random() * secretMessages.length)
        ];

        showMessage(message);
    }
});


// FOOTER-GEHEIMNIS

document.getElementById("footer-secret").addEventListener("click", () => {
    showMessage("🪄 Du hast das geheime Passwort gefunden: FELIX FELICIS!");
    createSparkles(document.querySelector("footer"), 20);
});


// NACHRICHT ANZEIGEN

function showMessage(text) {
    const message = document.getElementById("floating-message");

    message.textContent = text;
    message.classList.add("show");

    clearTimeout(window.messageTimer);

    window.messageTimer = setTimeout(() => {
        message.classList.remove("show");
    }, 3000);
}


// BEIM START

console.log("✨ Willkommen in Hogwarts!");
console.log("🦉 Tipp: Klicke siebenmal auf verschiedene Stellen der Website.");
console.log("🪄 Noch ein Tipp: Das Geheimnis im Footer wartet auf dich.");
