import { ToolUsage } from "@/types/audit";

export interface AuditRecommendation {
  tool: string;
  currentSpend: number;
  recommendedAction: string;
  estimatedSavings: number;
  reason: string;
}

export interface AuditResult {
  recommendations: AuditRecommendation[];
  totalMonthlySavings: number;
  totalAnnualSavings: number;
}

export function generateAudit(
  tools: ToolUsage[]
): AuditResult {
  const recommendations: AuditRecommendation[] = [];

  let totalMonthlySavings = 0;

  tools.forEach((tool) => {
    let savings = 0;
    let recommendation = "Current setup looks optimized";
    let reason = "Your current usage appears cost-efficient.";

    if (tool.seats <= 2 && tool.monthlySpend > 50) {
      savings = Math.round(tool.monthlySpend * 0.3);

      recommendation = "Downgrade to a smaller team plan";

      reason =
        "Small teams are often overpaying for collaborative AI plans.";
    }

    if (tool.monthlySpend > 150) {
      savings += Math.round(tool.monthlySpend * 0.15);

      recommendation = "Consider switching to discounted AI credits";

      reason =
        "High AI spending may qualify for infrastructure credit savings.";
    }

    totalMonthlySavings += savings;

    recommendations.push({
      tool: tool.toolId,
      currentSpend: tool.monthlySpend,
      recommendedAction: recommendation,
      estimatedSavings: savings,
      reason,
    });
  });

  return {
    recommendations,
    totalMonthlySavings,
    totalAnnualSavings: totalMonthlySavings * 12,
  };
}