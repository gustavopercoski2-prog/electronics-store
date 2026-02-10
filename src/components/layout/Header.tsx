import { ShoppingCart, Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-slate-900 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
            <div className="size-10 bg-blue-500 rounded-lg flex items-center justify-center font-bold text-xl">
                E
            </div>
            <h1 className="text-xl font-bold">Eletrônicos.dev</h1>
        </div>

        {/* Carrinho e menu */}
        <div className="flex items-center gap-4">
          <button className="relative p-2 hover:bg-slate-800 rounded-full transition">
            <ShoppingCart size={24} />
            <span className="absolute -top-1 -right-1 bg-blue-500 text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              0
            </span>
          </button>
          <button className="md:hidden p-2">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}