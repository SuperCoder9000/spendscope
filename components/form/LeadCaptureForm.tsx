"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function LeadCaptureForm() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");

  const [success, setSuccess] = useState(false);

  async function handleSubmit() {
    const { error } = await supabase
      .from("leads")
      .insert([
        {
          email,
          company,
          role,
        },
      ]);

    if (!error) {
      setSuccess(true);
    }
  }

  return (
    <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="text-2xl font-bold">
        Get Full Audit Report
      </h2>

      <p className="mt-2 text-zinc-400">
        Receive your audit summary and future optimization updates.
      </p>

      <div className="mt-6 grid gap-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-xl border border-zinc-700 bg-black px-4 py-3"
        />

        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="rounded-xl border border-zinc-700 bg-black px-4 py-3"
        />

        <input
          type="text"
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="rounded-xl border border-zinc-700 bg-black px-4 py-3"
        />

        <button
          onClick={handleSubmit}
          className="rounded-xl bg-white px-6 py-3 font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:bg-zinc-200"
        >
          Save Audit
        </button>

        {success && (
          <p className="text-green-400">
            Audit saved successfully.
          </p>
        )}
      </div>
    </div>
  );
}
