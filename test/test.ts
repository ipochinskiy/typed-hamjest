describe('hamjest', () => {
	it('should able to import by require', () => {
		let __ = require('hamjest');

		__.assertThat(typeof __, __.is('object'));
	});

	describe('assertThat', () => {
		let __: any;
		before(() => {
			__ = require('hamjest');
		});

		it('should be defined', () => {

			__.assertThat(__.assertThat, __.defined());
		});
	});
});
