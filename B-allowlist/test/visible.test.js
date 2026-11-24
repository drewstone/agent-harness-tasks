import test from "node:test";
import assert from "node:assert/strict";
import { isAllowed } from "../src/allow.js";

const list = ["example.com", "*.api.example.com"];

test("exact host", () => assert.equal(isAllowed("example.com", list), true));
test("subdomain wildcard", () => assert.equal(isAllowed("v1.api.example.com", list), true));
test("unrelated host", () => assert.equal(isAllowed("evil.test", list), false));
test("case insensitive", () => assert.equal(isAllowed("Example.COM", list), true));
test("suffix spoof rejected", () => assert.equal(isAllowed("notexample.com", list), false));
