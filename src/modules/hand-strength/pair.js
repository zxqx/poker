import groupBy from 'lodash.groupBy';

export function isPair(hand) {
	const groups = groupBy(hand, 'value');

	return Object.keys(groups).length === 4;
}

