import { earthquakeDamage } from "../src/earthquake.js";

describe("Calculations of earthquakeDamage", function(){

    it("tests little or no damage", function(){
        let result = earthquakeDamage(4.8);
        expect(result).toBe("Little or no damage");
    });

    it("tests some damage", function(){
        let result = earthquakeDamage(5.2);
        expect(result).toBe("Some damage");
    });

    it("tests serious damage", function(){
        let result = earthquakeDamage(6);
        expect(result).toBe("Serious damage: walls may crack or fall");
    });

    it("tests disaster", function(){
        let result = earthquakeDamage(7);
        expect(result).toBe("Disaster: buildings may collapse");
    });

    it("tests catastrophe", function(){
        let result = earthquakeDamage(8);
        expect(result).toBe("Catastrophe: most buildings destroyed");
    });
})