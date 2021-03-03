
let score = {Player: 0, Computer: 0, ties: 0};

function upDateScore(winner, scores) {
  if (winner === 'Player') {
    return score['Player']++;
  } else if (winner === 'Computer') {
    return score['Computer'];
  } else {
    return score['ties']++;
  }
}
