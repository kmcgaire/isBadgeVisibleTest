(function (App) {
	try {
		kik.browser.statusBarTransparent('black');
	} catch (err) {}
	try {
			App.restore();
		} catch (err) {
			App.load('home');
		}
}) (App);