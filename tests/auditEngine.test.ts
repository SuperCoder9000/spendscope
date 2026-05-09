import { describe, expect, it } from "vitest";
import { calculateSavings } from "@/lib/auditEngine";

describe("calculateSavings", () => {
  it("should recommend downgrade for small teams overspending", () => {
    const result = calculateSavings(100, 2);

    expect(result.savings).toBeGreaterThan(0);
  });

  it("should return optimized for low spend", () => {
    const result = calculateSavings(20, 5);

    expect(result.savings).toBe(0);
  });
});