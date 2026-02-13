import{totalCoins} from "../src/coins.js";
describe("Calculations of totalCoins", function(){

    it("tests zero coins", function(){
        let total = totalCoins(0,0,0,0,0);
        expect(total).toBe(0);
    });

    it("tests only loonies", function(){
        let total = totalCoins(0,0,0,3,0);
        expect(total).toBe(3);
    });

     it("tests mixed coins", function(){
        let total = totalCoins(2,1,1,1,1);
        expect(total).toBe(3.45);
    });
})