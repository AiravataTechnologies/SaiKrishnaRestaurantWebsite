import React, { useState } from "react";
import { Calendar, User, ArrowRight, X, Clock } from "lucide-react";
import blog1Image from "@assets/blog1.jpeg";
import blog2Image from "@assets/blog2.jpeg";
import blog3Image from "@assets/blog3.jpeg";
import blog4Image from "@assets/blog4.jpeg";

const Blog: React.FC = () => {
  const [selectedBlog, setSelectedBlog] = useState<number | null>(null);

  const blogPosts = [
    {
      title: "The Art of Making Perfect South Indian Dosa",
      excerpt:
        "Discover the secrets behind our crispy, golden dosas that have been perfected over 43 years of culinary excellence.",
      image: blog1Image,
      date: "March 15, 2024",
      author: "Chef Venkatesh",
      category: "Recipes",
      readTime: "5 min read",
      content: `
        <div class="prose max-w-none">
          <h2>The Sacred Art of Dosa Making</h2>
          <p>At Sai Krishna Restaurant, dosa making is more than just cooking – it's an art form that has been refined over four decades. Our master chefs have perfected the delicate balance of ingredients and technique that creates the perfect dosa every time.</p>

          <h3>The Foundation: Perfect Batter</h3>
          <p>The secret to exceptional dosas lies in the batter preparation. We use a traditional blend of rice and black gram dal (urad dal) that is soaked separately for optimal fermentation. The rice is soaked for 4-6 hours while the dal requires only 3-4 hours.</p>

          <h3>The Fermentation Process</h3>
          <p>Our batter ferments for exactly 8-12 hours in Mumbai's humid climate. This natural fermentation process creates the signature tangy flavor and airy texture that makes our dosas so special. The temperature and humidity are carefully monitored to ensure consistent results.</p>

          <h3>The Cooking Technique</h3>
          <p>On our traditional cast iron tawas, heated to precisely the right temperature, we spread the batter in a perfect circular motion. The key is in the wrist movement – a skill our chefs have mastered through years of practice. The dosa should sizzle gently as it hits the pan, creating that beautiful golden-brown color.</p>

          <h3>Varieties We Master</h3>
          <ul>
            <li><strong>Plain Dosa:</strong> The classic, served with coconut chutney and sambar</li>
            <li><strong>Masala Dosa:</strong> Filled with our signature spiced potato filling</li>
            <li><strong>Rava Dosa:</strong> Crispy semolina dosa with a unique texture</li>
            <li><strong>Set Dosa:</strong> Thick, fluffy dosas perfect for beginners</li>
          </ul>

          <h3>Our Secret Tips</h3>
          <p>What sets our dosas apart is the attention to detail. We never compromise on the quality of ingredients, always use filtered water, and maintain our tawas with traditional methods. The coconut chutney is ground fresh every morning, and our sambar recipe has remained unchanged since our founding.</p>

          <p>Visit Sai Krishna Restaurant to experience dosas made with 43 years of love, tradition, and expertise. Each dosa tells the story of our culinary heritage.</p>
        </div>
      `,
    },
    {
      title: "43 Years of Culinary Legacy: Our Journey",
      excerpt:
        "From a small family restaurant to Mumbai's beloved South Indian destination - read about our incredible journey.",
      image: blog2Image,
      date: "March 10, 2024",
      author: "Sri Krishna Team",
      category: "Story",
      readTime: "7 min read",
      content: `
        <div class="prose max-w-none">
          <h2>From Humble Beginnings to Mumbai's Heart</h2>
          <p>In 1981, when Mumbai was still Bombay, a small family with big dreams opened the doors of Sai Krishna Restaurant in the bustling lanes of Nana Chowk, Grant Road. What started as a modest 10-table establishment has grown into one of Mumbai's most beloved South Indian restaurants.</p>

          <h3>The Founding Vision</h3>
          <p>Our founder, Mr. Krishnamurthy, migrated from Tamil Nadu with recipes passed down through generations. His vision was simple yet profound: bring authentic South Indian flavors to Mumbai's cosmopolitan palate while maintaining the traditional cooking methods of his homeland.</p>

          <h3>The Early Years (1981-1990)</h3>
          <p>The first decade was challenging. Mumbai's food scene was dominated by North Indian cuisine, and South Indian food was limited to a few establishments. We persisted with quality, authenticity, and warm hospitality. Word spread slowly but surely – our dosas were different, our sambar had that homestyle taste, and our service came with genuine care.</p>

          <h3>Growing Recognition (1990-2000)</h3>
          <p>By the 1990s, Mumbai's palate was evolving. Food critics began noticing our authentic flavors. We were featured in local newspapers and food magazines. Families started making weekend trips specifically to enjoy our South Indian breakfast spreads. We expanded our seating capacity and introduced dinner service.</p>

          <h3>The Golden Era (2000-2010)</h3>
          <p>The new millennium brought unprecedented growth. Food bloggers and social media helped spread word about our restaurant. We maintained our core values while adapting to changing customer preferences. New dishes were added to the menu, but always with respect for traditional recipes.</p>

          <h3>Modern Times (2010-Present)</h3>
          <p>Today, we serve over 500 customers daily. Three generations of families have dined with us. Our staff has grown from 3 to 25 members, but we still maintain that family restaurant feeling. Technology has enhanced our operations, but our cooking methods remain traditional.</p>

          <h3>What Hasn't Changed</h3>
          <ul>
            <li>We still grind our chutneys fresh every morning</li>
            <li>Our sambar recipe remains exactly as it was in 1981</li>
            <li>Every dosa is made to order</li>
            <li>We source our ingredients from trusted suppliers we've worked with for decades</li>
            <li>Family values guide every decision we make</li>
          </ul>

          <h3>Looking Forward</h3>
          <p>As we look toward the future, our commitment remains unchanged: serving authentic South Indian cuisine with love, respect, and tradition. Every meal we serve carries 43 years of heritage, and every customer becomes part of our extended family.</p>

          <p>Thank you for being part of our journey. Here's to many more years of serving Mumbai with love and authentic flavors.</p>
        </div>
      `,
    },
    {
      title: "Health Benefits of Traditional South Indian Cuisine",
      excerpt:
        "Learn why South Indian food is not just delicious but also incredibly nutritious and beneficial for your health.",
      image: blog3Image,
      date: "March 5, 2024",
      author: "Dr. Priya Sharma",
      category: "Health",
      readTime: "6 min read",
      content: `
        <div class="prose max-w-none">
          <h2>The Nutritional Wisdom of South Indian Cuisine</h2>
          <p>South Indian cuisine isn't just about taste – it's a perfect example of food as medicine. The traditional combinations and cooking methods offer remarkable health benefits that modern nutrition science is only beginning to fully understand.</p>

          <h3>Fermented Foods: Nature's Probiotics</h3>
          <p>The cornerstone of South Indian cuisine lies in fermentation. Dosas, idlis, and uttapams are made from fermented batter, creating natural probiotics that support digestive health. This fermentation process:</p>
          <ul>
            <li>Increases the bioavailability of nutrients</li>
            <li>Reduces anti-nutrients like phytic acid</li>
            <li>Creates beneficial bacteria for gut health</li>
            <li>Improves protein digestibility</li>
          </ul>

          <h3>Rice and Lentil Combinations</h3>
          <p>The traditional pairing of rice with various lentils creates complete proteins containing all essential amino acids. This combination provides:</p>
          <ul>
            <li><strong>Complete Protein Profile:</strong> Essential for muscle maintenance and growth</li>
            <li><strong>Complex Carbohydrates:</strong> Sustained energy release</li>
            <li><strong>High Fiber Content:</strong> Supports digestive health and blood sugar control</li>
            <li><strong>B-Vitamins:</strong> Crucial for nervous system function</li>
          </ul>

          <h3>Coconut: The Superfood Ingredient</h3>
          <p>Coconut, used extensively in South Indian cooking, offers multiple health benefits:</p>
          <ul>
            <li>Medium-chain triglycerides (MCTs) for quick energy and metabolism boost</li>
            <li>Lauric acid with antimicrobial properties</li>
            <li>Natural electrolytes for hydration</li>
            <li>Healthy saturated fats for hormone production</li>
          </ul>

          <h3>Spices: Nature's Medicine Cabinet</h3>
          <p>South Indian cuisine's generous use of spices provides numerous health benefits:</p>

          <h4>Turmeric (Haldi)</h4>
          <p>Contains curcumin, a powerful anti-inflammatory compound that may help reduce chronic inflammation and support joint health.</p>

          <h4>Mustard Seeds</h4>
          <p>Rich in selenium and magnesium, supporting thyroid function and bone health.</p>

          <h4>Curry Leaves</h4>
          <p>Packed with antioxidants and may help regulate blood sugar levels.</p>

          <h4>Fenugreek Seeds</h4>
          <p>Known to help control blood sugar and cholesterol levels.</p>

          <h3>Traditional Cooking Methods</h3>
          <p>South Indian cooking methods preserve nutritional value:</p>
          <ul>
            <li><strong>Steaming (Idli):</strong> Retains water-soluble vitamins</li>
            <li><strong>Fermentation:</strong> Enhances nutrient absorption</li>
            <li><strong>Minimal Oil Usage:</strong> Healthy preparation methods</li>
            <li><strong>Tempering (Tadka):</strong> Releases beneficial compounds from spices</li>
          </ul>

          <h3>Balanced Meal Structure</h3>
          <p>Traditional South Indian meals follow principles of balanced nutrition:</p>
          <ul>
            <li>All six tastes (sweet, sour, salty, bitter, pungent, astringent) in one meal</li>
            <li>Proper food combining for optimal digestion</li>
            <li>Seasonal ingredients for maximum nutrition</li>
            <li>Appropriate portion sizes and eating patterns</li>
          </ul>

          <h3>Modern Research Validation</h3>
          <p>Recent studies have validated many traditional South Indian food practices:</p>
          <ul>
            <li>Fermented foods support immune system function</li>
            <li>Rice and lentil combinations provide optimal protein utilization</li>
            <li>Spice blends offer synergistic antioxidant effects</li>
            <li>Traditional meal patterns support metabolic health</li>
          </ul>

          <h3>At Sai Krishna Restaurant</h3>
          <p>We honor these traditional principles in every dish we serve. Our menu isn't just designed for taste – it's crafted with the wisdom of generations, ensuring that every meal nourishes your body while delighting your palate.</p>

          <p>Experience the perfect blend of health and taste in authentic South Indian cuisine. Your body and taste buds will thank you!</p>
        </div>
      `,
    },
    {
      title: "Festival Special: Celebrating with Authentic Flavors",
      excerpt:
        "Discover our special festival menu and how we celebrate traditional Indian festivals with authentic cuisine.",
      image: blog4Image,
      date: "February 28, 2024",
      author: "Chef Venkatesh",
      category: "Festivals",
      readTime: "8 min read",
      content: `
        <div class="prose max-w-none">
          <h2>Festivals Through Food: Our Celebration Heritage</h2>
          <p>At Sai Krishna Restaurant, festivals are more than dates on a calendar – they're opportunities to showcase the rich tapestry of South Indian culinary traditions. Each festival brings its own flavors, preparations, and stories that we've been sharing with Mumbai for 43 years.</p>

          <h3>Diwali: The Festival of Lights and Sweets</h3>
          <p>During Diwali, our kitchen transforms into a sweet-making haven. We prepare traditional South Indian sweets that have been part of Diwali celebrations for centuries:</p>

          <h4>Special Diwali Menu:</h4>
          <ul>
            <li><strong>Mysore Pak:</strong> Our signature sweet made with pure ghee and gram flour</li>
            <li><strong>Rava Laddu:</strong> Semolina balls infused with cardamom and cashews</li>
            <li><strong>Coconut Burfi:</strong> Fresh coconut sweets that melt in your mouth</li>
            <li><strong>Adhirasam:</strong> Traditional rice flour and jaggery sweet</li>
            <li><strong>Filter Coffee:</strong> The perfect accompaniment to festive sweets</li>
          </ul>

          <h3>Pongal: Harvest Festival Feast</h3>
          <p>Pongal, the Tamil harvest festival, is celebrated with great enthusiasm. Our special Pongal menu features dishes made from the new harvest:</p>

          <h4>Pongal Special Dishes:</h4>
          <ul>
            <li><strong>Ven Pongal:</strong> Savory rice and lentil preparation with ghee and pepper</li>
            <li><strong>Sakkarai Pongal:</strong> Sweet rice pudding with jaggery and cashews</li>
            <li><strong>Sugarcane Juice:</strong> Fresh pressed juice celebrating the harvest</li>
            <li><strong>Traditional Sambar:</strong> Made with fresh harvest vegetables</li>
          </ul>

          <h3>Onam: Kerala's Grand Celebration</h3>
          <p>For Onam, we create an authentic Sadya (feast) that represents the diversity of Kerala cuisine:</p>

          <h4>Onam Sadya Components:</h4>
          <ul>
            <li><strong>Avial:</strong> Mixed vegetables in coconut and yogurt</li>
            <li><strong>Sambar:</strong> Traditional lentil curry with vegetables</li>
            <li><strong>Rasam:</strong> Tangy tamarind and tomato soup</li>
            <li><strong>Thoran:</strong> Stir-fried vegetables with coconut</li>
            <li><strong>Payasam:</strong> Sweet rice pudding with cardamom</li>
            <li><strong>Banana Chips:</strong> Crispy traditional snack</li>
            <li><strong>Papad:</strong> Crispy lentil wafers</li>
          </ul>

          <h3>Navratri: Nine Nights of Pure Flavors</h3>
          <p>During Navratri, we offer special fasting menu items that comply with traditional dietary restrictions while maintaining incredible taste:</p>

          <h4>Navratri Vrat Menu:</h4>
          <ul>
            <li><strong>Sabudana Khichdi:</strong> Sago preparation with peanuts</li>
            <li><strong>Rajgira Dosa:</strong> Amaranth flour dosas</li>
            <li><strong>Fruit Chaat:</strong> Fresh seasonal fruits with rock salt</li>
            <li><strong>Coconut Water:</strong> Fresh and pure for fasting</li>
            <li><strong>Sweet Potato Curry:</strong> Cooked in sendha namak</li>
          </ul>

          <h3>Ganesh Chaturthi: Modak and More</h3>
          <p>Lord Ganesha's favorite sweet, Modak, takes center stage during Ganesh Chaturthi:</p>

          <h4>Ganesh Chaturthi Specials:</h4>
          <ul>
            <li><strong>Steamed Modak:</strong> Traditional rice flour dumplings with jaggery and coconut</li>
            <li><strong>Fried Modak:</strong> Crispy variation of the classic sweet</li>
            <li><strong>Coconut Rice:</strong> Fragrant rice with fresh coconut</li>
            <li><strong>Rava Upma:</strong> Semolina preparation with vegetables</li>
          </ul>

          <h3>Karnataka Rajyotsava: State Pride on a Plate</h3>
          <p>We celebrate Karnataka's formation day with authentic Kannadiga cuisine:</p>

          <h4>Karnataka Special Menu:</h4>
          <ul>
            <li><strong>Bisi Bele Bath:</strong> Spicy rice, lentils, and vegetable one-pot meal</li>
            <li><strong>Dharwad Peda:</strong> Famous sweet from North Karnataka</li>
            <li><strong>Ragi Mudde:</strong> Finger millet balls with sambar</li>
            <li><strong>Mysore Masala Dosa:</strong> With special red chutney</li>
          </ul>

          <h3>Our Festival Philosophy</h3>
          <p>Every festival celebration at Sai Krishna Restaurant follows these principles:</p>

          <h4>Authenticity First</h4>
          <p>We research traditional recipes and cooking methods, often consulting with families who have preserved these traditions for generations.</p>

          <h4>Quality Ingredients</h4>
          <p>Festival specials use the finest ingredients – pure ghee, fresh coconut, high-quality jaggery, and spices sourced from their regions of origin.</p>

          <h4>Cultural Education</h4>
          <p>Our staff is trained to explain the significance of each dish and its role in the festival celebration.</p>

          <h4>Community Celebration</h4>
          <p>We believe festivals bring people together. Our restaurant becomes a cultural hub where people from different backgrounds can experience authentic traditions.</p>

          <h3>Planning Your Festival Visit</h3>
          <p>Festival menus are typically available 3-5 days before and after each festival. We recommend:</p>
          <ul>
            <li>Calling ahead to reserve festival specials</li>
            <li>Coming with family and friends for the full experience</li>
            <li>Trying dishes you've never had before</li>
            <li>Learning about the cultural significance of what you're eating</li>
          </ul>

          <h3>Creating Memories</h3>
          <p>Over the years, we've witnessed countless family celebrations, first-time festival experiences, and cultural exchanges. Each festival season brings new stories and strengthens our connection with Mumbai's diverse community.</p>

          <p>Join us for the next festival celebration and become part of our extended family. Experience how food becomes the bridge between tradition and modern life, between different cultures, and between generations.</p>

          <p>At Sai Krishna Restaurant, every festival is a feast, and every feast tells a story.</p>
        </div>
      `,
    },
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Decorative ornament */}
          <div className="flex justify-center mb-6">
            <div className="text-orange-500 text-3xl">✦ ❋ ✦</div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            Blog
          </h2>
          <div className="flex justify-center mb-6">
            <div className="text-orange-500 text-3xl">❋ ✦ ❋</div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Read our latest stories, recipes, and insights about South Indian
            cuisine and culture
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-1 md:hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {post.category}
                </div>
              </div>

              <div className="p-4 md:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-sm text-gray-500 mb-3 space-y-1 sm:space-y-0">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <button
                  onClick={() => setSelectedBlog(index)}
                  className="flex items-center space-x-2 text-orange-500 hover:text-orange-600 font-semibold transition-colors group-hover:translate-x-2 transform duration-300"
                  data-testid={`button-read-more-${index}`}
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold transition-colors duration-300 transform hover:scale-105 text-sm md:text-base">
            View All Posts
          </button>
        </div>
      </div>

      {/* Blog Modal */}
      {selectedBlog !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2 md:p-4">
          <div className="bg-white rounded-xl max-w-4xl max-h-[95vh] md:max-h-[90vh] w-full overflow-hidden shadow-2xl">
            <div className="relative">
              <img
                src={blogPosts[selectedBlog].image}
                alt={blogPosts[selectedBlog].title}
                className="w-full h-32 object-cover"
              />
              <button
                onClick={() => setSelectedBlog(null)}
                className="absolute top-2 right-2 md:top-4 md:right-4 bg-black bg-opacity-50 text-white p-1.5 md:p-2 rounded-full hover:bg-opacity-70 transition-colors"
                data-testid="button-close-blog"
              >
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4 bg-orange-500 text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold">
                {blogPosts[selectedBlog].category}
              </div>
            </div>

            <div className="overflow-y-auto max-h-[80vh] md:max-h-[75vh]">
              <div className="p-4 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 text-xs md:text-sm text-gray-500 mb-4 space-y-2 sm:space-y-0">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{blogPosts[selectedBlog].date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{blogPosts[selectedBlog].author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{blogPosts[selectedBlog].readTime}</span>
                  </div>
                </div>

                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                  {blogPosts[selectedBlog].title}
                </h1>

                <div
                  className="prose prose-sm md:prose-lg max-w-none text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: blogPosts[selectedBlog].content,
                  }}
                  data-testid="blog-content"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Blog;
