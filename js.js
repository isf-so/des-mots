function checkPassword() {
    var password = document.getElementById('password').value;
    if (password === 'bonheur') {
      window.location.href = 'pages/accueil.html'; // Rediriger vers la page suivante après la connexion réussie
    } else {
      alert('Mot de passe incorrect. Veuillez réessayer.');
    }
  }
  