(function (App) {
	try {
			App.restore();
		} catch (err) {
			App.load('home');
		}
}) (App);