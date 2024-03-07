var audio = new Audio('../zik.mp3');
audio.volume = 0.1; // Met le volume à 50%
audio.play();

document.addEventListener('DOMContentLoaded', function() {
    const phrases = [
      "Certaines épreuves sont plus dures que d'autres. Accroche-toi <3",
      "Croit en tes projets et ils se réaliseront.",
      "Votre famille est fier de vous. :)",
      "Ce qu'ils t'ont fait n'était pas de ta faute.",
      "N'oublie jamais que tu es une personne formidable. :)",
      "La vie est parfoit injuste. Ne baisse pas les bras, nous croyons en toi.",
      "Ton entourage est fier de toi, Bravo pour tout ce que tu as accompli. :)",
      "Ne laisse jamais les gens de douter de toi",
      "La vie est trop courte pour la passer à se battre contre soi-même.",
      "N'oublie jamais que tu es formidable.",
      "Nous sommes fier de toi.",
      "Il n'est jamais trop tard. commence maintenant.",
      "Croit en tes rêves, tu en es capable",
      "Soit fier de qui tu es.",
      "Ne lâche rien, le meilleur est à venir.",
      "Tu va y arriver.",
      "Crois en toi !",
      "Continue d'avancer La vie est belle! <3",
      "La vie est belle, mais courte. Alors profite.",
      "Certaines epreuves sont plus dure que d'autres. Accroche-toi <3",
      "J'èspere que tu guériras des choses dont tu ne parles pas.",
      "Arrête de compter tes problèmes, commence à compter ceux résolu.",
      "Les gens changent et c'est normal.",
      "Ignore le regard des autres, tu es rayonnante. :)",
      "Je suis content que tu aies surmonté les moments difficiles :)",
      "Ecoute ton coeur.",
      "Reste forte, tu es courageuse",
      "ne baisse pas les bras tu es sur le point de réussir.",
      "Nous croyons en toi, tu es une personne formidable. :)",
      "Vous n'avez pas changer, vous avez évolué. :)",
      "Soit indulgent avec toi même.",
      "Tout va bien se passer. ne crain rien.",
      "Soit fier du chemin que tu as parcouru",
      "N'oublie pas pourquoi tu as commencé.", 
      "Les bonnes choses arrivent.",
      "Chaque épreuve est une occasion de grandir. Tiens bon !",
      "Tes projets sont comme des graines, nourris-les et ils fleuriront.",
      "Ta famille te soutient toujours, garde la tête haute. :)",
      "Ta valeur est inestimable, n'oublie jamais ça. :)",
      "La vie peut sembler injuste par moments, mais ta force intérieure te guidera.",
      "Ton parcours est une source de fierté pour ceux qui t'entourent. Félicitations pour tes réalisations ! :)",
      "Ne permets jamais à d'autres de te faire douter de toi-même.",
      "Investis ton énergie dans l'amour-propre plutôt que dans la lutte intérieure.",
      "Souviens-toi toujours de ta propre grandeur.",
      "Reste comme tu es. :)"
    ];
    const phraseElement = document.getElementById('phrase');
    const bouton = document.getElementById('bouton');
    const titre = document.querySelector('h1');

    // Fonction pour afficher une phrase aléatoire
    function afficherPhraseAleatoire() {
      const randomIndex = Math.floor(Math.random() * phrases.length);
      const totalPhrases = phrases.length;
      phraseElement.textContent = phrases[randomIndex];
      titre.textContent = `Phrases ${randomIndex + 1} / ${totalPhrases}`;

      // Changer la typographie à chaque changement de phrase
      const fonts = ["Arial", "Helvetica", "Verdana", "Georgia", "Times New Roman", "Courier New"];
      const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
      phraseElement.style.fontFamily = randomFont;
    }

    // Afficher une phrase aléatoire lors du chargement de la page
    afficherPhraseAleatoire();

    // Ajouter un écouteur d'événement sur le bouton pour afficher une nouvelle phrase aléatoire
    bouton.addEventListener('click', afficherPhraseAleatoire);
});