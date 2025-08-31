export const products = [
  {
    id: 1,
    name: "Handmade Soap Collection",
    price: 25.99,
    seller: "Sarah Johnson",
    sellerId: 1,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
    category: "Beauty & Wellness",
    description: "Natural handmade soaps with essential oils"
  },
  {
    id: 2,
    name: "Custom Knitted Scarves",
    price: 35.00,
    seller: "Maria Rodriguez",
    sellerId: 2,
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=300&fit=crop",
    category: "Fashion & Accessories",
    description: "Warm, cozy scarves in various colors"
  },
  {
    id: 3,
    name: "Organic Homemade Bread",
    price: 8.50,
    seller: "Lisa Chen",
    sellerId: 3,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop",
    category: "Food & Beverages",
    description: "Fresh baked bread made with organic ingredients"
  },
  {
    id: 4,
    name: "Handcrafted Jewelry Set",
    price: 45.99,
    seller: "Sarah Johnson",
    sellerId: 1,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop",
    category: "Jewelry",
    description: "Elegant jewelry made with semi-precious stones"
  },
  {
    id: 5,
    name: "Personalized Tutoring Service",
    price: 30.00,
    seller: "Emily Davis",
    sellerId: 4,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
    category: "Education",
    description: "One-on-one tutoring for K-12 students"
  },
  {
    id: 6,
    name: "Homemade Jam Assortment",
    price: 12.99,
    seller: "Lisa Chen",
    sellerId: 3,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
    category: "Food & Beverages",
    description: "Three jars of seasonal fruit jams"
  }
];

export const sellers = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Austin, TX",
    bio: "Passionate crafter specializing in handmade soaps and jewelry. 5+ years of experience in natural beauty products.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
    categories: ["Beauty & Wellness", "Jewelry"],
    rating: 4.8,
    productsCount: 12
  },
  {
    id: 2,
    name: "Maria Rodriguez",
    location: "Miami, FL",
    bio: "Expert knitter creating cozy accessories for all seasons. Each piece is made with love and attention to detail.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    categories: ["Fashion & Accessories"],
    rating: 4.9,
    productsCount: 8
  },
  {
    id: 3,
    name: "Lisa Chen",
    location: "Seattle, WA",
    bio: "Home baker passionate about creating delicious, organic treats. All ingredients are locally sourced and fresh.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
    categories: ["Food & Beverages"],
    rating: 4.7,
    productsCount: 15
  },
  {
    id: 4,
    name: "Emily Davis",
    location: "Denver, CO",
    bio: "Certified teacher offering personalized tutoring services. Helping students reach their full potential.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    categories: ["Education"],
    rating: 4.6,
    productsCount: 5
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Jennifer Smith",
    location: "Portland, OR",
    text: "H2H helped me turn my passion for baking into a successful business. The mentorship program was invaluable!",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    rating: 5
  },
  {
    id: 2,
    name: "Amanda Wilson",
    location: "Nashville, TN",
    text: "The platform is so easy to use and the community is incredibly supportive. I've doubled my income in just 6 months!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5
  },
  {
    id: 3,
    name: "Rachel Brown",
    location: "Phoenix, AZ",
    text: "As a stay-at-home mom, H2H gave me the flexibility and tools I needed to start my own business. Highly recommend!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    rating: 5
  }
];

export const mentorshipModules = [
  {
    id: 1,
    title: "Business Fundamentals",
    description: "Learn the basics of starting and running your own business",
    duration: "4 weeks",
    topics: ["Business Planning", "Financial Management", "Marketing Basics", "Legal Requirements"]
  },
  {
    id: 2,
    title: "Digital Marketing",
    description: "Master social media and online marketing strategies",
    duration: "3 weeks",
    topics: ["Social Media Marketing", "Content Creation", "Email Marketing", "SEO Basics"]
  },
  {
    id: 3,
    title: "Product Photography",
    description: "Learn to take professional photos of your products",
    duration: "2 weeks",
    topics: ["Lighting Techniques", "Composition", "Editing", "Equipment Setup"]
  },
  {
    id: 4,
    title: "Customer Service Excellence",
    description: "Build lasting relationships with your customers",
    duration: "2 weeks",
    topics: ["Communication Skills", "Problem Solving", "Building Trust", "Handling Complaints"]
  }
];

export const features = [
  {
    id: 1,
    title: "Seller Profiles",
    description: "Create beautiful, professional profiles to showcase your products and story",
    icon: "👤"
  },
  {
    id: 2,
    title: "Product Catalog",
    description: "Easy-to-use tools to list and manage your products with beautiful photos",
    icon: "📦"
  },
  {
    id: 3,
    title: "Mentorship Programs",
    description: "Learn from successful entrepreneurs and grow your business skills",
    icon: "🎓"
  },
  {
    id: 4,
    title: "Community Support",
    description: "Connect with fellow homemakers and share experiences",
    icon: "🤝"
  }
];
