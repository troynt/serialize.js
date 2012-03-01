test("serialize()", function() {

	var params = {foo:"bar", baz:42, quux:"All your base are belong to us"};
	equal( decodeURIComponent(serialize(params)), "foo=bar&baz=42&quux=All+your+base+are+belong+to+us", "simple" );

	params = {someName: [1, 2, 3], regularThing: "blah" };
	equal( decodeURIComponent(serialize(params)), "someName[0]=1&someName[1]=2&someName[2]=3&regularThing=blah", "with array" );

	params = {foo: ["a", "b", "c"]};
	equal( decodeURIComponent(serialize(params)), "foo[0]=a&foo[1]=b&foo[2]=c", "with array of strings" );

	params = {foo: ["baz", 42, "All your base are belong to us"] };
	equal( decodeURIComponent(serialize(params)), "foo[0]=baz&foo[1]=42&foo[2]=All+your+base+are+belong+to+us", "more array" );

	params = {foo: { bar: "baz", beep: 42, quux: "All your base are belong to us" } };
	equal( decodeURIComponent(serialize(params)), "foo[bar]=baz&foo[beep]=42&foo[quux]=All+your+base+are+belong+to+us", "even more arrays" );
});

test("serialize() Constructed prop values", function() {
	expect( 4 );

	function Record() {
		this.prop = "val";
	}

	var params = { "test": new String("foo") };
	equal( serialize( params, false ), "test=foo", "Do not mistake new String() for a plain object" );

	params = { "test": new Number(5) };
	equal( serialize( params, false ), "test=5", "Do not mistake new Number() for a plain object" );

	params = { "test": new Date() };
	ok( serialize( params, false ), "(Non empty string returned) Do not mistake new Date() for a plain object" );

	// should allow non-native constructed objects
	params = { "test": new Record() };
	equal( serialize( params, false ), serialize({ "test": { prop: "val" } }), "Allow non-native constructed objects" );
});

