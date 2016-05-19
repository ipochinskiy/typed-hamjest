import * as assert from 'assert';
import { assertThat, is } from 'hamjest';
import * as __ from 'hamjest';

describe('hamjest', () => {
    describe('with star import', () => {
        it('should be defined', () => {

            assert(__ !== undefined, 'hamjest double underscore should be defined');
        });

        it('should has assertThat function', () => {

            assert.equal(typeof __.assertThat, 'function', 'hamjest assertThat should be a function');
        });

        it('should has is function', () => {

            assert.equal(typeof __.is, 'function', 'hamjest is should be a function');
        });

        it('should be useable for possitive assertions', function () {

            assert.doesNotThrow(
                () => {
                    __.assertThat(true, __.is(true));
                },
                'AssertionError'
            );
        });

        it('should be useable for negative assertions', function()  {

            assert.throws(
                () => {
                    __.assertThat(true, __.is(false));
                },
                'AssertionError'
            );
        });
    });

    describe('with direct import', () => {

        it('should has assertThat function', () => {

            assert.equal(typeof assertThat, 'function', 'hamjest assertThat should be a function');
        });

        it('should has is function', () => {

            assert.equal(typeof is, 'function', 'hamjest is should be a function');
        });

        it('should be useable for possitive assertions', function()  {

            assert.doesNotThrow(
                () => {
                    assertThat(true, is(true));
                },
                'AssertionError'
            );
        });

        it('should be useable for negative assertions', function() {

            assert.throws(
                () => {
                    assertThat(true, is(false));
                },
                'AssertionError'
            );
        });
    });

    describe('with require import', () => {
        let required__: any;
        before(() => {
            required__ = require('hamjest');
        });

        it('should be defined', () => {

            assert(required__ !== undefined, 'hamjest double underscore should be defined');
        });

        it('should has assertThat function', () => {

            assert.equal(typeof required__.assertThat, 'function', 'hamjest assertThat should be a function');
        });

        it('should has is function', () => {

            assert.equal(typeof required__.is, 'function', 'hamjest is should be a function');
        });

        it('should be useable for possitive assertions', function()  {

            assert.doesNotThrow(
                () => {
                    required__.assertThat(true, required__.is(true));
                },
                'AssertionError'
            );
        });

        it('should be useable for negative assertions', function() {

            assert.throws(
                () => {
                    required__.assertThat(true, required__.is(false));
                },
                'AssertionError'
            );
        });
    });
});
