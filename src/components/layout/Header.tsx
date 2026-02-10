import { ShoppingCart, Menu, Search, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg border-b border-slate-800 w-full">

      <div className="container mx-auto px-4 h-20 flex justify-between items-center relative">

        {/* Logo */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="size-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-xl shadow-blue-500/20 shadow-lg">
            E
          </div>
          <h1 className="text-xl font-bold tracking-tight truncate">Eletrônicos.dev</h1>
        </div>

        {/* Menu desktop */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6 text-sm font-light text-slate-200">
            <a href="#" className="hover:text-white transition hover:underline underline-offset-4">Produtos</a>
            <a href="#" className="text-rose-500 font-medium hover:text-rose-400 transition">Ofertas</a>
            <a href="#" className="hover:text-white transition hover:underline underline-offset-4">Destaques</a>
            <a href="#" className="hover:text-white transition hover:underline underline-offset-4">Sobre</a>
          </nav>

          <div className="h-4 w-px bg-slate-700"></div>

          {/* Carrinho e menu */}
          <div className="flex items-center gap-4">
            <button className="text-slate-300 hover:text-white transition" title="Buscar">
              <Search size={20} />
            </button>
            <button className="relative p-2 hover:bg-slate-800 rounded-full transition group">
              <ShoppingCart size={20} className="text-slate-200" />
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-slate-900">
                0
              </span>
            </button>
          </div>
        </div>

        {/* Controles mobile */}
        <div className="flex md:hidden items-center gap-2 shrink-0">
          <button className="p-2 text-slate-300 hover:text-white transition">
            <Search size={20} />
          </button>

          <button className="relative p-2 hover:bg-slate-800 rounded-full transition">
            <ShoppingCart size={20} />
            <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-slate-900">
              0
            </span>
          </button>

          <button
            onClick={toggleMenu}
            className="p-2 text-slate-300 hover:text-white focus:outline-none ml-1"
          >
            {isMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>

        {/* Menu mobile dropdown */}
        {isMenuOpen && (
          <div className="absolute top-20 left-0 w-full bg-slate-900 border-b border-slate-800 shadow-xl md:hidden flex flex-col p-4 animate-in slide-in-from-top-5 duration-200 z-50">
            <nav className="flex flex-col gap-2 text-center">
              <a href="#" className="py-3 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition border-b border-slate-800/50">
                Produtos
              </a>
              <a href="#" className="py-3 text-rose-500 font-bold hover:bg-slate-800 rounded-lg transition border-b border-slate-800/50">
                Ofertas
              </a>
              <a href="#" className="py-3 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition border-b border-slate-800/50">
                Destaques
              </a>
              <a href="#" className="py-3 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition">
                Sobre
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}