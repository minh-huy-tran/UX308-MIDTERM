import { gymMembership } from "../src/gym.js";

describe ("Calculations of gymMembership", function(){

    it ("tests 1 friends", function(){
        let total = gymMembership(100,1);
        expect (total).toBe(95);
    });

     it ("tests 2 friend", function(){
        let total = gymMembership(100,2);
        expect (total).toBe(90);
    });

     it ("tests 3 friend", function(){
        let total = gymMembership(100,3);
        expect (total).toBe(85);
    });

     it ("tests 4 friend", function(){
        let total = gymMembership(100,4);
        expect (total).toBe(85);
    });
})