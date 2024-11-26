import { Search, ShoppingCart, User, Menu, ChevronRight } from 'lucide-react';

const HomePage = () => {
  const featuredProducts = [
    { id: 1, name: 'Premium Headphones', price: '$299', category: 'Electronics' },
    { id: 2, name: 'Leather Backpack', price: '$159', category: 'Accessories' },
    { id: 3, name: 'Smart Watch', price: '$199', category: 'Electronics' },
    { id: 4, name: 'Running Shoes', price: '$129', category: 'Sports' }
  ];

  const categories = [
    'Electronics', 'Fashion', 'Home & Living', 'Sports', 'Beauty', 'Books'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Menu className="h-6 w-6 mr-4 lg:hidden" />
              <span className="text-2xl font-bold text-indigo-600">ShopHub</span>
            </div>
            
            <div className="hidden lg:flex flex-1 items-center justify-center px-8">
              <div className="max-w-lg w-full">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <User className="h-6 w-6 text-gray-600" />
              <div className="relative">
                <ShoppingCart className="h-6 w-6 text-gray-600" />
                <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative bg-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Summer Collection</span>
              <span className="block text-indigo-600">Up to 50% Off</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl">
              Discover the latest trends in fashion and explore our new arrivals.
            </p>
            <div className="mt-5">
              <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                Shop Now
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <div key={category} className="bg-gray-100 rounded-lg p-6 text-center hover:bg-gray-200 cursor-pointer">
              <span className="font-medium">{category}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-200 rounded-t-lg">
                <img
                  src="/api/placeholder/400/320"
                  alt={product.name}
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <span className="text-sm text-gray-500">{product.category}</span>
                <h3 className="font-medium mt-1">{product.name}</h3>
                <div className="mt-2 flex items-center justify-between">
                  <span className="font-bold text-lg">{product.price}</span>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-700">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-600 uppercase">Shop</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-gray-500 hover:text-gray-900">New Arrivals</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-900">Best Sellers</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-900">Deals</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-600 uppercase">Support</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-gray-500 hover:text-gray-900">Help Center</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-900">Returns</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-900">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-600 uppercase">Company</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-gray-500 hover:text-gray-900">About Us</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-900">Careers</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-900">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-600 uppercase">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-gray-500 hover:text-gray-900">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-900">Terms of Service</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-900">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-400 text-sm text-center">© 2024 ShopHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;