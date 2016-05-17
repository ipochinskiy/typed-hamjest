describe('hamjest', () => {
	it('should be globally preset', () => {
		let __ = require('hamjest');
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