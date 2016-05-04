var datekuku = function(from, to) {
	var diff_ms = to.getTime() - from.getTime();

	var sec = Math.floor(diff_ms / 1000);
	var min = Math.floor(sec / 60);
	var hr = Math.floor(min / 60);
	var day = Math.floor(hr / 24);

	var ms = diff_ms % 1000;
	sec = sec % 60;
	min = min % 60;
	hr = hr % 24;

	return {
		day: day,
		hr :hr,
		min: min,
		sec: sec,
		ms: ms
	};
};

var kukuLeftpad = function(str, len) {
	str = String(str);
	len = len - str.length;

	for (var i = 0; i < len; i += 1) {
		str = "0" + str;
	}

	return str;
}