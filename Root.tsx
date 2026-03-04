import { Outlet } from 'react-router';
import { Header } from '../components/Header';
import { CartProvider } from '../context/CartContext';
import { Toaster } from '../components/ui/sonner';

export function Root() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Outlet />
        </main>
        <Toaster />
      </div>
    </CartProvider>
  );
}
