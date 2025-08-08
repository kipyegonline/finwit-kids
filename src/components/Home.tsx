const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white">
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
            Welcome to FinWit Kids
          </h1>
          <p className="text-xl mb-12 text-white/90">
            Learn financial literacy in a fun and engaging way!
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <h2 className="text-4xl mb-4">🎯 Our Mission</h2>
              <p className="text-lg text-white/90">
                Making financial education accessible and enjoyable for children
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <h2 className="text-4xl mb-4">🚀 Get Started</h2>
              <p className="text-lg text-white/90">
                Explore our interactive lessons and games to build financial
                knowledge
              </p>
            </div>
          </div>

          <div className="mt-16">
            <button className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-bold py-4 px-8 rounded-full text-lg hover:from-yellow-500 hover:to-orange-500 transform hover:scale-105 transition-all duration-200 shadow-lg">
              Start Learning Today!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
