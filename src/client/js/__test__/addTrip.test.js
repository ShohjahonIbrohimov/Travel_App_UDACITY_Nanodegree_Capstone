// Import the js file to test
import { addTrip } from "../addTrip.js";
describe("Testing the submit functionality", () => {

    test("Testing the addTrip() function", () => {
        expect(typeof addTrip).toEqual("function");
    })
});
