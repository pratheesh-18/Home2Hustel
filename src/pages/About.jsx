const About = () => {
  const howItWorks = [
    {
      step: 1,
      title: "Create Your Profile",
      description: "Set up your seller profile with your story, skills, and what you offer. It's your digital storefront!",
      icon: "👤"
    },
    {
      step: 2,
      title: "List Your Products",
      description: "Add your products or services with beautiful photos and detailed descriptions to attract customers.",
      icon: "📦"
    },
    {
      step: 3,
      title: "Connect & Learn",
      description: "Join our mentorship programs and connect with other homemakers to grow your business skills.",
      icon: "🎓"
    },
    {
      step: 4,
      title: "Start Selling",
      description: "Begin receiving orders and building your customer base. We handle the technical details for you.",
      icon: "💰"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About H2H
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to empower homemakers to turn their passions into profitable businesses, 
              creating financial independence and personal fulfillment.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-700 mb-4">
                To create a world where every homemaker has the opportunity to build a successful business 
                from their home, achieving financial independence while maintaining work-life balance.
              </p>
              <p className="text-gray-600">
                We envision a community where skills, creativity, and entrepreneurial spirit thrive, 
                transforming homes into hubs of innovation and economic growth.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-4">
                To provide homemakers with the tools, resources, and support they need to successfully 
                launch and grow their home-based businesses.
              </p>
              <p className="text-gray-600">
                Through our platform, mentorship programs, and supportive community, we help turn 
                everyday skills and passions into profitable ventures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Makes Us Different
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              H2H is specifically designed for homemakers, with features that understand your unique needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Home-Focused</h3>
              <p className="text-gray-600">
                Everything is designed to work around your home life, with flexible schedules and family-friendly features.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl mb-4">👥</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Support</h3>
              <p className="text-gray-600">
                Connect with other homemakers who understand your journey and can offer advice and encouragement.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Mentorship</h3>
              <p className="text-gray-600">
                Learn from successful entrepreneurs who started just like you - from their homes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl mb-4">💡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Skill Development</h3>
              <p className="text-gray-600">
                Access training programs that help you develop both business and technical skills.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Safe & Secure</h3>
              <p className="text-gray-600">
                Built-in security features and verified buyer/seller system for peace of mind.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Easy to Use</h3>
              <p className="text-gray-600">
                Intuitive platform designed for users of all technical levels, with mobile-friendly interface.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Getting started with H2H is simple. Follow these four easy steps to begin your journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => (
              <div key={item.step} className="text-center relative">
                <div className="bg-pink-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                
                {/* Connector line */}
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-pink-200 transform -translate-y-1/2 z-0"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-white mb-3">Community First</h3>
              <p className="text-purple-100">
                We believe in the power of community and support each other's success.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="text-xl font-semibold text-white mb-3">Empowerment</h3>
              <p className="text-purple-100">
                We empower homemakers to take control of their financial future.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-semibold text-white mb-3">Excellence</h3>
              <p className="text-purple-100">
                We strive for excellence in everything we do, from platform features to customer support.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
