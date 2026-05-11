import SpendForm from "@/components/form/SpendForm";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute left-[-120px] top-[-120px] h-[300px] w-[300px] rounded-full bg-green-500/20 blur-3xl" />

<div className="absolute bottom-[-120px] right-[-120px] h-[300px] w-[300px] rounded-full bg-blue-500/20 blur-3xl" />
      <section className="mx-auto flex max-w-6xl flex-col items-center text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-400">
          AI Spend Optimization
        </p>

        <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl md:text-7xl">
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