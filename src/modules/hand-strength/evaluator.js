import handRankings from './hand-rankings.js';

export function determineHandRanking(hand) {
  const ranking = handRankings.find(ranking => ranking.evaluator(hand));

  return {
    ...ranking,
    ...ranking.evaluator(hand)
  };
}

export function determineWinningHands(hands) {
  return hands
    .map(hand => determineHandRanking(hand))
    .sort((a, b) => b.strength - a.strength)[0];
}
