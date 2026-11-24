import test from "node:test";
import assert from "node:assert/strict";
import { mergeIntervals } from "../src/merge.js";

test("empty", () => assert.deepEqual(mergeIntervals([]), []));
test("single", () => assert.deepEqual(mergeIntervals([[2, 5]]), [[2, 5]]));
test("overlap", () => assert.deepEqual(mergeIntervals([[1, 3], [2, 6]]), [[1, 6]]));
test("disjoint stay apart", () =>
  assert.deepEqual(mergeIntervals([[1, 2], [4, 5]]), [[1, 2], [4, 5]]));
test("touching intervals merge", () =>
  assert.deepEqual(mergeIntervals([[1, 2], [2, 3]]), [[1, 3]]));
