module.exports = function sum(list) {
	return list.reduce(function(subtotal, current) {
		return subtotal + current;
	}, 0);
};