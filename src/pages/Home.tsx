import { HeroSlider } from "../components/ui/HeroSlider";

export function Home({ className }: { className?: string }) {

  function handleLoadMore() {
    console.log("clicou em ver todos");
  }

  return (
    <main className={className}>
      <HeroSlider />

      <section className="container mx-auto px-4 py-8">

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-slate-900">
            Nossos Produtos
          </h2>

          <button
            onClick={handleLoadMore}
            className="text-sm text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
          >
            Ver todos →
          </button>
        </div>

        {/* grid vai entrar aqui */}
        <div className="w-full min-h-[200px] border-2 border-dashed border-slate-200 rounded-lg flex flex-col items-center justify-center gap-2 text-slate-400">
          <span className="text-sm font-medium">
            Em desenvolvimento
          </span>

          <span className="text-xs">
            grid de produtos ainda não implementado
          </span>
        </div>

      </section>

    </main>
  );
}
