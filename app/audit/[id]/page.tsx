import { supabaseAdmin } from "@/lib/supabaseAdmin";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function SharedAuditPage({
  params,
}: Props) {
  const resolvedParams = await params;

  const { data } = await supabaseAdmin
    .from("audits")
    .select("*")
    .eq("id", resolvedParams.id)
    .single();

  if (!data) {
    return (
      <main className="min-h-screen bg-black p-10 text-white">
        Audit not found.
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl rounded-3xl border border-zinc-800 bg-zinc-900 p-10">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
          Shared Audit Report
        </p>

        <h1 className="mt-4 text-5xl font-bold">
          ${data.total_monthly_savings}/mo Savings
        </h1>

        <p className="mt-4 text-zinc-400">
          Estimated annual savings:
          ${data.total_annual_savings}
        </p>

        <div className="mt-8 rounded-2xl border border-zinc-800 bg-black p-6">
          <p className="text-lg leading-relaxed text-zinc-300">
            {data.summary}
          </p>
        </div>
      </div>
    </main>
  );
}