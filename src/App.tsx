import React from 'react';
import { ArrowRight, Bluetooth, Bell } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <nav className="fixed w-full p-6 bg-white/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight font-aqua">modo</h1>
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
                <h2 className="text-6xl font-bold leading-tight">Smart Pills, Smarter Living</h2>
                <p className="text-xl text-gray-600">Your daily routine, reimagined. Track, dispense, and optimize your health with our portable smart pill device.</p>
                <div className="flex gap-4">
                  <button className="px-8 py-3 bg-black text-white rounded-full flex items-center gap-2 hover:bg-gray-800 transition-colors">
                  Join the Future of Wellness <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/assets/pills.jpg"
                  alt="Pills Falling"
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
                  <ArrowRight className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">On-the-Go Convenience</h3>
                {/* <p className="text-gray-600">Never forget a dose again, modo syncs with your lifestyle.</p> */}
                <p className="text-gray-600">
                  Your health shouldn’t slow you down, <span className="font-aqua">modo</span> keeps you on track wherever life takes you.
                </p>

              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <Bluetooth className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Smart App Integration</h3>
                <p className="text-gray-600">Never forget a dose again, <span className="font-aqua">modo</span> syncs with your lifestyle and mobile device.</p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <Bell className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Automated Dispensing</h3>
                <p className="text-gray-600">Right pill at the right time, no guessing.</p>
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
                  src="/assets/palm.jpg"
                  alt="Medication in Palm"
                  className="w-full h-auto rounded-3xl shadow-xl hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-8 order-1 lg:order-2">
                <div className="flex items-center gap-2">
                  {/* <Award className="w-6 h-6" /> */}
                  {/* <span className="text-sm font-medium">Smart design</span> */}
                </div>
                <h2 className="text-4xl font-bold leading-tight">Crafted for Perfection</h2>
                <p className="text-xl text-gray-600"><span className="font-aqua">modo</span> ensures precision, convenience, and peace of mind—all in the palm of your hand.</p>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    Portable & Discreet
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    Intelligent Reminders
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    Real-time Tracking 
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