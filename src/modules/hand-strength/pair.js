import groupBy from 'lodash.groupBy';

export function isPair(hand) {
	const groups = groupBy(hand, 'value');

	console.log(groups);
}

isPair(hand)