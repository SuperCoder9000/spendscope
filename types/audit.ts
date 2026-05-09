export interface ToolUsage {
  toolId: string;
  plan: string;
  monthlySpend: number;
  seats: number;
}

export interface AuditFormData {
  teamSize: number;
  useCase: string;
  tools: ToolUsage[];
}