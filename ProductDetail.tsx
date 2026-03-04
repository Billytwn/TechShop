import { useParams, useNavigate } from 'react-router';
import { ShoppingCart, Star, ArrowLeft, Package } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { toast } from 'sonner';

export function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl mb-4">Produit non trouvé</h1>
        <Button onClick={() => navigate('/')}>
          Retour aux produits
        </Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} ajouté au panier`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Button
        variant="ghost"
        onClick={() => navigate('/')}
        className="mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Retour aux produits
      </Button>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col">
          <div className="mb-4">
            <Badge className="mb-3">{product.category}</Badge>
            <h1 className="text-4xl mb-2">{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="text-lg">{product.rating}</span>
              </div>
              <span className="text-gray-400">•</span>
              <div className="flex items-center gap-2 text-gray-600">
                <Package className="h-4 w-4" />
                <span>
                  {product.stock > 10
                    ? 'En stock'
                    : `Plus que ${product.stock} en stock`}
                </span>
              </div>
            </div>
          </div>

          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            {product.description}
          </p>

          <div className="mt-auto">
            <div className="mb-6">
              <span className="text-4xl">{product.price.toFixed(2)} €</span>
            </div>

            <div className="flex gap-3">
              <Button
                size="lg"
                className="flex-1"
                onClick={handleAddToCart}
                disabled={product.stock === 0}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Ajouter au panier
              </Button>
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="mb-2">Informations</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Livraison gratuite dès 50€</li>
                <li>• Retour gratuit sous 30 jours</li>
                <li>• Garantie 2 ans</li>
                <li>• Paiement sécurisé</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
