declare namespace hamjest {

	// asserts
	export interface Promise {
		then(successCallback: any, errorCallback?: any): Promise;
		catch(errorCallback: any): Promise;
		finally(finalCallback: any): Promise;
	}
	export function assertThat(value: any, matcher: Matcher): void;
	export function promiseThat(value: any, matcher: Matcher): Promise;
	export function fail(value: any): void;

	// matcher
	export interface Matcher {
		matches(): boolean;
		describeTo(description: Description): void;
		// TODO is this a string return?
		describeMismatch(value: any, description: Description): string;
		isMatcher(matcherOrValue: any): boolean;
	}
	export interface TypeSafeMatcher extends Matcher {
		isExpectedType(): boolean;
		matchesSafely(): boolean;
		describeMismatchSafely(actual: any, description: Description): void;
	}
	export function FeatureMatcher(valueOrMatcher: any, featureDescription: string,
		featureName: string, featureFunction: any): Matcher;

	export function anything(): Matcher;
	export function strictlyEqualTo(operand: any): Matcher;
	// TODO returns more than a normal matcher
	export function is(innerMatcher: Matcher): Matcher;
	export function not(innerMatcher: Matcher): Matcher;
	export function equalTo(operand: any): Matcher;
	export function truthy(): Matcher;
	export function falsy(): Matcher;
	export function falsey(): Matcher;
	export function defined(): Matcher;
	export function undefined(): Matcher;
	export function undef(): Matcher;
	export function instanceOf(operand: any): Matcher;
	export function array(): TypeSafeMatcher;
	export function bool(): TypeSafeMatcher;
	export function boolean(): TypeSafeMatcher;
	export function date(): TypeSafeMatcher;
	export function func(): TypeSafeMatcher;
	export function number(): TypeSafeMatcher;
	export function object(): TypeSafeMatcher;
	export function regExp(): TypeSafeMatcher;
	export function string(): TypeSafeMatcher;
	export function containsString(substring: string): Matcher;
	export function startsWith(prefix: string): Matcher;
	export function endsWith(suffix: string): Matcher;
	export function matchesPattern(stringOrPattern: string | RegExp): Matcher;
	export function matches(target: any): TypeSafeMatcher;
	export function failsToMatch(target: any, descriptionMatcher?: Matcher): TypeSafeMatcher;
	export function hasDescription(descriptionMatcher: Matcher): TypeSafeMatcher;
	export function lessThan(threshold: number): Matcher;
	export function lessThanOrEqualTo(threshold: number): Matcher;
	export function greaterThan(threshold: number): Matcher;
	export function greaterThanOrEqualTo(threshold: number): Matcher;
	export function inRange(start: number, end?: number): TypeSafeMatcher;
	export function after(threshold: Date): Matcher;
	export function afterOrEqualTo(threshold: Date): Matcher;
	export function before(threshold: Date): Matcher;
	export function beforeOrEqualTo(threshold: Date): Matcher;
	export function closeTo(threshold: number, delta: number): Matcher;
	export function allOf(...matchers: Array<Matcher>): Matcher;
	export function anyOf(...matchers: Array<Matcher>): Matcher;
	export function everyItem(matcherOrValue: any): TypeSafeMatcher;
	export function hasItem(matcherOrValue: any): TypeSafeMatcher;
	export function hasItems(...itemsOrMatchers: Array<any>): TypeSafeMatcher;
	export function contains(...itemsOrMatchers: Array<any>): TypeSafeMatcher;
	export function containsInAnyOrder(...itemsOrMatchers: Array<any>): TypeSafeMatcher;
	export function orderedBy(comp: any, compDescription?: string): TypeSafeMatcher;
	export function hasSize(matcherOrValue: Matcher | number): TypeSafeMatcher;
	export function isEmpty(): TypeSafeMatcher;
	export function empty(): TypeSafeMatcher;
	export function hasProperties(properties: any): Matcher;
	export function hasProperty(name: string, valueOrMatcher: any): Matcher;
	export function throws(operand?: any): TypeSafeMatcher;
	export function returns(resultMatcherOrValue: any): TypeSafeMatcher;
	export function typedError(errorType: any, messageMatcherOrValue: any): Matcher;
	export function promise(): TypeSafeMatcher;
	export function fulfilled(operand?: any): TypeSafeMatcher;
	export function isFulfilledWith(operand: any): TypeSafeMatcher;
	export function willBe(operand: any): TypeSafeMatcher;
	export function rejected(operand?: any): TypeSafeMatcher;
	export function isRejectedWith(operand: any): TypeSafeMatcher;
	export function promiseAllOf(...matchers: Array<Matcher>): Matcher;

	// utils
	export interface Description {
		//useJsonForObjects: boolean;
		//indentation: number;
		append(text: string): Description;
		indented(describingfn: any): any;
		appendDescriptionOf(selfDescribing: any): Description;
		appendValue(value: any): Description;
		// TODO is this really an array?
		appendNonJson(value: Array<any>): Description;
		appendList(start: string, separator: string, end: string, list: Array<any>): void;
		get(): string;
	}
	export function isMatcher(value: any): boolean;
	export function asMatcher(value: any): Matcher;
	// TODO understand this
	export function acceptingMatcher(innerFunction: any): any;
	export function describe(matcher: Matcher): Description;
}