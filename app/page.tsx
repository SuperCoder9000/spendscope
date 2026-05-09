import SpendForm from "@/components/form/SpendForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <section className="mx-auto flex max-w-6xl flex-col items-center text-center">
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

        <SpendForm />
      </section>
    </main>
  );
}