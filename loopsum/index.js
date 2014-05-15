module.exports = function sum(list) {
	var result = 0;

	for (var i = 0, l = list.length; i < l; i++) {
		result = result + list[i];
	}

	return result;
};
