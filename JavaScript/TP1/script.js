function verifierQuiz() {
  
    // Définit les bonnes réponses
    const bonnesReponses = {
        q1: "let",   // 'let' est le mot-clé le plus couramment utilisé pour déclarer une variable
        q2: "boolean", // 'true' est de type boolean
        q3: "55",     // "5" + 5 concatène en "55" (string)
        q4: "/",      // L'opérateur de division est '/'
        q5: "object"   // Un objet est de type 'object'
    };
  
    // Récupère les réponses sélectionnées par l'utilisateur
   
    let q1 = document.querySelector('input[name="q1"]:checked');
    let q2 = document.querySelector('input[name="q2"]:checked');
    let q3 = document.querySelector('input[name="q3"]:checked');
    let q4 = document.querySelector('input[name="q4"]:checked');
    let q5 = document.querySelector('input[name="q5"]:checked');

    // Vérifie si toutes les questions ont été répondues
    if (!q1 || !q2 || !q3 || !q4 || !q5) {
        //Affiche un message d’alerte à l’utilisateur pour lui rappeler de répondre à toutes les questions.
        alert("Veuillez répondre à toutes les questions !");
        //Interrompt immédiatement l’exécution du script à ce niveau.
        return;
    }

    // Compteur pour suivre le nombre de bonnes réponses
    let score = 0;
    
    // Vérifie les réponses de l'utilisateur
    if (q1.value === bonnesReponses.q1) score++;
    if (q2.value === bonnesReponses.q2) score++;
    if (q3.value === bonnesReponses.q3) score++;
    if (q4.value === bonnesReponses.q4) score++;
    if (q5.value === bonnesReponses.q5) score++;

    // Affiche le résultat du quiz
    document.getElementById("resultat").innerText = "Votre score est : " + score + "/5";
}
