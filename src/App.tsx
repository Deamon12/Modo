import React from 'react';
import { ArrowRight, Volume2, Bluetooth, Battery, Award } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <nav className="fixed w-full p-6 bg-white/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight">modo</h1>
          <button className="px-6 py-2 bg-black text-white rounded-full flex items-center gap-2 hover:bg-gray-800 transition-colors">
            Pre-order now <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h2 className="text-6xl font-bold leading-tight">Experience Pure Sound Excellence</h2>
                <p className="text-xl text-gray-600">Immerse yourself in crystal-clear audio with our premium wireless headphones, crafted for the ultimate listening experience.</p>
                <div className="flex gap-4">
                  <button className="px-8 py-3 bg-black text-white rounded-full flex items-center gap-2 hover:bg-gray-800 transition-colors">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80"
                  alt="Premium Headphones"
                  className="w-full h-auto rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <Volume2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">High-Fidelity Audio</h3>
                <p className="text-gray-600">Experience studio-quality sound with our advanced audio technology.</p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <Bluetooth className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Seamless Connectivity</h3>
                <p className="text-gray-600">Instant pairing with all your devices through Bluetooth 5.0.</p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <Battery className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">40h Battery Life</h3>
                <p className="text-gray-600">All-day listening with quick charging capabilities.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Showcase */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1577174881658-0f30ed549adc?w=800&q=80"
                  alt="Headphones Detail"
                  className="w-full h-auto rounded-3xl shadow-xl hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-8 order-1 lg:order-2">
                <div className="flex items-center gap-2">
                  <Award className="w-6 h-6" />
                  <span className="text-sm font-medium">Award-winning design</span>
                </div>
                <h2 className="text-4xl font-bold leading-tight">Crafted for Perfection</h2>
                <p className="text-xl text-gray-600">Premium materials combined with ergonomic design ensure comfort during extended listening sessions.</p>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    Aerospace-grade aluminum
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    Memory foam cushioning
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    Custom 40mm drivers
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black text-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-8">Ready to Experience?</h2>
            <button className="px-8 py-3 bg-white text-black rounded-full flex items-center gap-2 hover:bg-gray-100 transition-colors mx-auto">
              Pre-order now <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-600">
          <p>© 2025 modo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;