var scores = document.getElementById('scores');
var clearScoresBtn = document.getElementById('clear-scores');

function highscores() {
    // Run a function that loads the high scores.
    var highscores = JSON.parse(localStorage.getItem('highscores')) || [];
    // Sort the scores high to low.
    highscores.sort(function (a, b) { return b.score - a.score });

    for (var i = 0; i < highscores.length; i++) {
        var liEl = document.createElement('li');
        liEl.textContent = highscores[i].initials + ': ' + highscores[i].score

        scores.append(liEl);
    }
}
// Append the scores to the final scores container.


highscores()

function clearHighScores() {
    localStorage.removeItem('highscores');
    window.location.reload()
}

// Event listener to clear the score.
// For loop to recored all the scores.
// Button to go back and event listener to go back.

clearScoresBtn.addEventListener('click', clearHighScores)