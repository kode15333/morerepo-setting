import {getNodeVersion} from "@/node";

describe("node", () => {
    it("should work", () => {
        expect(1).toBe(1);
    });

    it("node version ", ()=>{

        expect(getNodeVersion()).toBe(process.version);
    })
})