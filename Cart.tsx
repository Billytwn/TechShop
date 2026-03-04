import { useNavigate } from 'react-router';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { CartItemComponent } from '../components/CartItemComponents';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Separator } from '../components/ui/separator';

export function Cart() {
  const { items, getTotalPrice } = useCart();
  const navigate = useNavigate();
  const totalPrice = getTotalPrice();
  const shipping = totalPrice > 50 ? 0 : 5.99;
  const finalTotal = totalPrice + shipping;

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto text-center">
          <ShoppingBag className="h-24 w-24 mx-auto mb-4 text-gray-300" />
          <h2 className="text-2xl mb-2">Votre panier est vide</h2>
          <p className="text-gray-600 mb-6">
            Découvrez nos produits et commencez vos achats
          </p>
          <Button onClick={() => navigate('/')}>
            Continuer mes achats
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl mb-8">Mon Panier</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Articles ({items.length})</CardTitle>
            </CardHeader>
            <CardContent>
              {items.map((item) => (
                <CartItemComponent key={item.id} item={item} />
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card className="sticky top-20">
            <CardHeader>
              <CardTitle>Résumé de la commande</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Sous-total</span>
                <span>{totalPrice.toFixed(2)} €</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Livraison</span>
                <span>
                  {shipping === 0 ? (
                    <span className="text-green-600">Gratuite</span>
                  ) : (
                    `${shipping.toFixed(2)} €`
                  )}
                </span>
              </div>
              {totalPrice < 50 && totalPrice > 0 && (
                <p className="text-sm text-gray-500">
                  Plus que {(50 - totalPrice).toFixed(2)} € pour la livraison gratuite
                </p>
              )}
              <Separator />
              <div className="flex justify-between text-lg">
                <span>Total</span>
                <span>{finalTotal.toFixed(2)} €</span>
              </div>
            </CardContent>
            <CardFooter className="flex-col gap-3">
              <Button
                className="w-full"
                size="lg"
                onClick={() => navigate('/checkout')}
              >
                Procéder au paiement
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => navigate('/')}
              >
                Continuer mes achats
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
