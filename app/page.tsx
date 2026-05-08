export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-400">
          AI Spend Optimization
        </p>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
          Stop Overpaying For AI Tools
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-zinc-400">
          Audit your AI stack instantly and discover hidden monthly savings across
          ChatGPT, Claude, Cursor, Copilot, Gemini, and more.
        </p>

        <button className="mt-8 rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:scale-105">
          Audit My AI Spend
        </button>
      </section>
    </main>
  );
}