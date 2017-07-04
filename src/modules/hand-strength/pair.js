import groupBy from 'lodash.groupBy';

export function isPair(hand) {
  const groups = groupBy(hand, 'value');
  const keys = Object.keys(groups);

  const criteria = keys.some(key => groups[key].length === 2)
    && keys.length === 4;

  const value = parseInt(keys.find(key => groups[key].length === 2));

  const kickers = keys
    .filter(key => parseInt(key) !== value)
    .map(kicker => parseInt(kicker))
    .sort((a,b) => b-a);
 
 return criteria && {
  values: [value],
  kickers
 };
}



export function hasPair(hand) {
  const groups = groupBy(hand, 'value');
  const keys = Object.keys(groups); 
  
  const criteria = keys.some(key => groups[key].length === 2) && keys.length >= 4;

  const value = parseInt(keys.find(key => groups[key].length === 2));

  const kickers = keys
    .filter(key => parseInt(key) !== value)
    .map(kicker => parseInt(kicker))
    .sort((a,b) => b-a)
    .slice(0,3);
 
  return criteria && {
    values: [value],
    kickers
  };
}



