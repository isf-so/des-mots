document.addEventListener('DOMContentLoaded', function() {
    let questions = [
        "A qui penses-tu en lisant 'Parfois, la simple présence de certaines personnes est plus bénéfique que n'importe quel médicament.'",
        "Qui est cette personne avec qui les heures semblent être des minutes ?",
        "A qui penses-tu en lisant 'Merci d'être resté à mes côtés quand j'étais au plus bas'",
        "Qui est cette la personne avec qui tu peux juste être toi même sans te soucier de son regard ?",
        "Que dirais-tu à ton toi du passé pour ne pas reproduire les mêmes erreurs ?",
        "Quand as-tu été réellement heureux pour la dernière fois ?",
        "A qui penses-tu en lisant 'certaines personnes méritent tout le bonheur du monde'",
        "Si tu écrivais un livre sur ta mère, quelle serait la dernière ligne ?"
    ];

    const questionElement = document.getElementById('question');
    const reponseElement = document.getElementById('reponse');
    const boutonSuivant = document.getElementById('suivant');
    const titre = document.querySelector('h1');

    // Fonction pour afficher une question aléatoire qui n'a pas été posée récemment
    function afficherQuestionAleatoire() {
        if (questions.length === 0) {
            questionElement.textContent = "Vous avez répondu à toutes les questions !"; // Message de fin
            boutonSuivant.disabled = true; // Désactiver le bouton suivant
            return;
        }

        const randomIndex = Math.floor(Math.random() * questions.length);
        const selectedQuestion = questions[randomIndex];

        questionElement.textContent = selectedQuestion;
        reponseElement.value = ""; // Réinitialiser le champ de réponse
        titre.textContent = `Question ${questions.length} restante(s)`;

        // Supprimer la question de la liste
        questions.splice(randomIndex, 1);
    }

    // Afficher une question aléatoire lors du chargement de la page
    afficherQuestionAleatoire();

    // Ajouter un écouteur d'événement sur le bouton pour afficher une nouvelle question aléatoire
    boutonSuivant.addEventListener('click', afficherQuestionAleatoire);
});
