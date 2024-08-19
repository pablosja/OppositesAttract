import { describe, it, expect } from "vitest";
import { isLove } from "./app.js";

describe("isLove", () => {
  it("if petals1 is 1 and petals2 is 4 should return true", () => {
    const petals1 = 1;
    const petals2 = 4;
    expect(isLove(petals1, petals2)).toBe(true);
  });
  it("if petals1 is 2 and petals2 is 2 should return false", () => {
    const petals1 = 2;
    const petals2 = 2;
    expect(isLove(petals1, petals2)).toBe(false);
  });
  it("if petals1 is 0 and petals2 is 1 should return true", () => {
    const petals1 = 0;
    const petals2 = 1;
    expect(isLove(petals1, petals2)).toBe(true);
  });
  it("if petals1 is 0 and petals2 is 0 should return false", () => {
    const petals1 = 0;
    const petals2 = 0;
    expect(isLove(petals1, petals2)).toBe(false);
  });
});