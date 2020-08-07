// Import the js file to test
const testExpress = require('../../../server/server');
describe("Testing the submit functionality", () => {

    test("Testing the Express server function", () => {
        expect(testExpress).toEqual("Post received successfully!");
    })
});
