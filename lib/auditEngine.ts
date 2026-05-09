export function calculateSavings(
  currentSpend: number,
  seats: number
) {
  if (seats <= 2 && currentSpend > 50) {
    return {
      recommendation: "Downgrade to a smaller team plan",
      savings: Math.round(currentSpend * 0.3),
    };
  }

  return {
    recommendation: "Current plan appears optimized",
    savings: 0,
  };
}