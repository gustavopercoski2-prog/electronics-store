import { Outlet } from 'react-router-dom';
import { Header } from './Header';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 w-full">
        <Outlet />
      </main>

      <footer className="bg-slate-900 text-gray-400 py-8 text-center text-sm">
        <p>© 2026 Eletrônicos.dev - Projeto de Estudo</p>
      </footer>
    </div>
  );
}

