import { describe, expect, it } from "vitest";
import { generateAudit } from "@/lib/auditEngine";

describe("generateAudit", () => {
  it("should generate recommendations", () => {
    const result = generateAudit([
      {
        toolId: "chatgpt",
        plan: "Team",
        monthlySpend: 120,
        seats: 2,
      },
    ]);

    expect(result.recommendations.length).toBe(1);
  });

  it("should calculate monthly savings", () => {
    const result = generateAudit([
      {
        toolId: "cursor",
        plan: "Business",
        monthlySpend: 200,
        seats: 2,
      },
    ]);

    expect(result.totalMonthlySavings).toBeGreaterThan(0);
  });

  it("should calculate annual savings", () => {
    const result = generateAudit([
      {
        toolId: "cursor",
        plan: "Business",
        monthlySpend: 200,
        seats: 2,
      },
    ]);

    expect(result.totalAnnualSavings).toBe(
      result.totalMonthlySavings * 12
    );
  });

  it("should return recommendation reasons", () => {
    const result = generateAudit([
      {
        toolId: "claude",
        plan: "Team",
        monthlySpend: 150,
        seats: 2,
      },
    ]);

    expect(result.recommendations[0].reason).toBeDefined();
  });

  it("should detect optimized setups", () => {
    const result = generateAudit([
      {
        toolId: "copilot",
        plan: "Individual",
        monthlySpend: 10,
        seats: 5,
      },
    ]);

    expect(
      result.recommendations[0].recommendedAction
    ).toContain("optimized");
  });
});