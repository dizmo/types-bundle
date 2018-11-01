import { expect } from "chai";
import { Bundle } from "../lib";
declare const bundle: Bundle;

import "mocha";

describe("Bundle", () => {
    it("should not exist", () => {
        expect(typeof bundle).to.eq("undefined");
    });
    it("should be declareable", () => {
        expect(typeof bundle).to.eq("undefined");
    });
});
