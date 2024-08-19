import { describe, it, expect } from "vitest";
import { isLove } from "./app.js";

describe("isLove function tests", () => {
  it("Timmy: 1 / Sarah: 4 -> se espera true", () => {
    expect(isLove(1, 4)).toBe(true);
  });

  it("Timmy: 2 / Sarah: 2 -> se espera false", () => {
    expect(isLove(2, 2)).toBe(false);
  });

  it("Timmy: 0 / Sarah: 1 -> se espera true", () => {
    expect(isLove(0, 1)).toBe(true);
  });

  it("Timmy: 0 / Sarah: 0 -> se espera false", () => {
    expect(isLove(0, 0)).toBe(false);
  });
});
