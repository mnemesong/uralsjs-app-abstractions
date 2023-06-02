import * as assert from "assert";
import { regroup } from "../src";
import { describe, it } from "mocha";

describe("test regroup", () => {
    it("test1", () => {
        const models = [
            {header: "aboba", sel: "1"},
            {header: "jujuga", sel: "3"},
            {header: "3214!", sel: "1"},
        ]
        const grouped = regroup(models, (m) => m.sel);
        const nominal = {
            "1": [
                {header: "aboba", sel: "1"},
                {header: "3214!", sel: "1"},
            ],
            "3": [
                {header: "jujuga", sel: "3"},
            ]
        }
        assert.deepEqual(nominal, grouped);
    });
});