"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { aiTools } from "@/data/pricing";

export default function SpendForm() {
  const [teamSize, setTeamSize] = useState(() => {
  if (typeof window !== "undefined") {
    return Number(localStorage.getItem("teamSize")) || 5;
  }

  return 5;
});
  const [useCase, setUseCase] = useState("coding");
  const handleTeamSizeChange = (value: number) => {
  setTeamSize(value);

  localStorage.setItem("teamSize", value.toString());
};

  const router = useRouter();

  return (
    <div className="mt-12 w-full max-w-3xl rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
      <h2 className="mb-6 text-2xl font-bold">
        Audit Your AI Stack
      </h2>

      <div className="grid gap-6">
        <div>
          <label className="mb-2 block text-sm text-zinc-400">
            Team Size
          </label>

          <input
            type="number"
            value={teamSize}
            onChange={(e) => handleTeamSizeChange(Number(e.target.value))}
            className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3 outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-zinc-400">
            Primary Use Case
          </label>

          <select
            value={useCase}
            onChange={(e) => setUseCase(e.target.value)}
            className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3 outline-none"
          >
            <option value="coding">Coding</option>
            <option value="writing">Writing</option>
            <option value="research">Research</option>
            <option value="mixed">Mixed</option>
          </select>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">
            AI Tools
          </h3>

          <div className="grid gap-4">
            {aiTools.map((tool) => (
              <div
                key={tool.id}
                className="rounded-xl border border-zinc-800 bg-black p-4"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{tool.name}</p>

                    <p className="text-sm text-zinc-400">
                      Available plans:
                    </p>
                  </div>
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {tool.plans.map((plan) => (
                    <span
                      key={plan.name}
                      className="rounded-lg bg-zinc-800 px-3 py-1 text-sm"
                    >
                      {plan.name} - ${plan.price}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
  onClick={() => router.push("/audit")}
  className="rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:scale-[1.02]"
>
  Generate Audit
</button>
      </div>
    </div>
  );
}