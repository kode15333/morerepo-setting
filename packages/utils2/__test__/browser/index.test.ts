import {getBrowserVersion} from "@/browser";

describe("browser", () => {
  it("get browser", () => {
    expect(1).toBe(1);

    expect(getBrowserVersion()).toBe("browser version");
  })
})