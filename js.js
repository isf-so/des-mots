function checkPassword() {
  var password = document.getElementById('password').value;
  
  if (password === 'bonheur') {
    window.location.href = 'pages/accueil.html'; // Rediriger vers la page suivante après la connexion réussie
  } else if (password === 'heureux') {
    window.location.href = 'pages2/2page.html'; // Rediriger vers la page suivante après la connexion réussie
  } else if (password === 'help') {
    window.location.href = 'help/help.html'; // Rediriger vers la page suivante après la connexion réussie
  } else {
    alert('Mot incorrect, réessaye !');
  }
}
