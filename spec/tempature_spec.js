import { fahrenheitToCelcius } from "../src/tempature.js";
describe("Calculation of fahrenheitToCelcius", function (){
    
    it("tests freezing point", function (){
        let c = fahrenheitToCelcius(32);
        expect(c).toBe(0);
    });
    
    it("tests boiling point", function (){
        let c = fahrenheitToCelcius(212);
        expect(c).toBe(100);
    });
    
    it("tests room tempature", function (){
        let c = fahrenheitToCelcius(70);
        expect(c).toBeCloseTo(21.11, 2);
    });
})