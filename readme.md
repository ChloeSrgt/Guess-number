# Devinez mon numéro

Fork ça et écris une petite application "Devine mon numéro"

## Écran d'accueil

- Bouton de démarrage du jeu

En cliquant sur le bouton Démarrer, le jeu choisit un nombre entre 1 et 100 et passe à l'écran suivant

## Écran de lecture

- Indication de jeu, disant soit :
  - "Tapez votre numéro" au premier tour
  - "Supérieur à X" ou "Inférieur à X" lorsque l'utilisateur a soumis un nombre (X est le nombre tapé)
- Une entrée où l'utilisateur tape son numéro
- Un bouton soumettre pour valider le tour
- Un compteur pour indiquer de quel tour il s'agit

- BONUS : Taper ENTER devrait valider le tour

Après chaque soumission, nous vérifions si l'utilisateur a deviné le nombre choisi et réinitialisons la valeur d'entrée. Sinon, affiche le même écran, si deviné, affiche l'écran de félicitations

## Écran de félicitations

- Afficher un message "Félicitations, vous avez trouvé X en Y virages". Où X est le nombre deviné et Y le nombre de tours
- Un bouton pour recommencer
- En cliquant sur le bouton de redémarrage, nous choisissons un nouveau nombre aléatoire, réinitialisons les compteurs et redémarrons le jeu


# Guess my number

Fork this and write a little application "Guess my number"

## Home screen

- Button Start Game

On Click on Start Button, the game choose a number between 1 & 100 and move to next screen

## Play screen

- Game indication, saying either:
  - "Type your number"on first round
  - "Greater than X" or "Lower than X" when user has submitted a number (X is the typed number)
- An input where user type its number
- A submit button to validate the round
- A counter to indicate which round it is

- BONUS: Typing ENTER should validate the round

After each submission, we check if user has guessed the chosen number, and reset the input value. If not, displays same screen, if guessed, display Congratulation Screen

## Congratulation screen

- Display a message "Congratulations, you've found X in Y turns". Where X is the number guessed, and Y the number of rounds
- A button to start again
- On click on restart button, we choose a new random number, reset the counters, and restart game
