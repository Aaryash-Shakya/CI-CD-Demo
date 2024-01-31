const someFunction = require("./script.js");

test("Check if same value is returned", () => {
	expect(someFunction("a")).toEqual("a");
});
