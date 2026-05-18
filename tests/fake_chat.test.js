import test from "node:test";
import assert from "node:assert/strict";

test("decoder", () => {
    const x = 1;
    const decoded = x + x;
    const expected = 2;
    assert.strictEqual(decoded, expected, "must be 2");
});
