import{cubeVolume} from"../src/cube.js";
describe("calculations of cubeVolume", function (){

    it("tests height 1", function (){
        let volume = cubeVolume(1);
        expect(volume).toBe(1);
    });

      it("tests height 2", function (){
        let volume = cubeVolume(2);
        expect(volume).toBe(8);
    });

      it("tests height 3", function (){
        let volume = cubeVolume(3);
        expect(volume).toBe(27);
    });
})