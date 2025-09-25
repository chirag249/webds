import React from "react"; // Removed useState
import { motion } from "framer-motion"; // Removed AnimatePresence
// Removed ChevronDown, ChevronUp as they are no longer used
import "./Menu.css"; // styles for book/card effect

interface MenuItem {
  id: string;
  name: string | string[];
  description: string;
  ingredients: string[];
  dietary: string[];
  price: string;
  image: string;
}

const Menu: React.FC = () => {
  // --- The `expandedItems` state is no longer needed ---

  const menuItems: MenuItem[] = [
    {
      id: "welcome-drinks",
      name: [
        "Fruit Punch",
        "Watermelon Juice",
        "Pulpy Grape Juice",
        "Mint Lime Juice",
        "Milk Shake (Optional)",
        "Cold Badam Milk",
        "Sugarcane Juice",
        "Hesaru Baayru",
        "Ragi Baayru",
        "Ellu Baayru",
      ],
      description: "Welcome Drinks (Any One)",
      ingredients: ["Fresh Fruits", "Sugar", "Herbs"],
      dietary: ["Vegetarian"],
      price: "-",
      image:
        "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "kosambari",
      name: [
        "Corn Pomegranate Kosambari",
        "Hesarubele Kosambari",
        "Kadalebele Kosambari",
        "Molake Kalu Kosambari",
        "Congress Kosambari",
        "Guava Kosambari",
      ],
      description: "Kosambari (Any One)",
      ingredients: ["Lentils", "Vegetables", "Lemon Juice", "Spices"],
      dietary: ["Vegetarian", "Vegan"],
      price: "-",
      image:
        "https://www.indianveggiedelight.com/wp-content/uploads/2022/03/hesarubele-kosambari.jpg",
    },
    {
      id: "starters-north-indian",
      name: [
        "Hara Bhara Kabab",
        "French Fries",
        "Cheese Ball",
        "Babycorn Manchurian",
        "Mushroom Manchurian",
        "Veg Ball Manchurian",
        "Paneer Manchurian",
        "Gobi Manchurian",
      ],
      description: "Starters (Any One)",
      ingredients: ["Vegetables", "Paneer", "Flour", "Spices"],
      dietary: ["Vegetarian"],
      price: "-",
      image:
        "https://images.pexels.com/photos/541216/pexels-photo-541216.jpeg",
    },
    {
      id: "starters-south-indian",
      name: [
        "Bajji (Varieties)",
        "Kaju Pakoda",
        "Sabakki Bonda",
        "Ambode",
        "Rava Banana",
        "Baby Corn Rava",
        "Jackfruit Kabab",
      ],
      description: "Starters (Any One)",
      ingredients: ["Gram Flour", "Vegetables", "Lentils", "Spices"],
      dietary: ["Vegetarian"],
      price: "-",
      image:
        "https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "palya",
      name: [
        "Thondekai Kaju Palya",
        "Carrot Beans Palya",
        "Suvarnagadde Palya",
        "Mix Veg Palya",
        "Alasande Palya",
        "Bendi Palya",
        "Kabulchanna Palya",
      ],
      description: "Palya (Any Two)",
      ingredients: ["Assorted Vegetables", "Coconut", "Spices"],
      dietary: ["Vegetarian"],
      price: "-",
      image:
        "https://media.istockphoto.com/id/1549569369/photo/pakistani-famous-mix-vegetables.jpg?s=2048x2048&w=is&k=20&c=xmengezK9qhXa5jldhfkhU1yUaP4mWSn66sm91p5kFU=",
    },
    {
      id: "rice-bath",
      name: [
        "Veg Pulav",
        "Veg Biriyani",
        "Vangi Bath",
        "Methi Bath",
        "Pudina Bath",
        "Besibele Bath",
        "Tomato Bath",
        "Palak Rice Bath",
      ],
      description: "Rice Bath (Any One)",
      ingredients: ["Rice", "Vegetables", "Ghee", "Spices"],
      dietary: ["Vegetarian"],
      price: "-",
      image:
        "https://images.pexels.com/photos/17910326/pexels-photo-17910326.jpeg",
    },
    {
      id: "sweets",
      name: [
        "Jilebi",
        "Mysorepak",
        "Rasmalai",
        "Cham Cham",
        "Gulab Jamun",
        "Carrot Halwa",
        "Kashi Halwa",
      ],
      description: "Sweets (Any Two)",
      ingredients: ["Milk Solids", "Sugar", "Flour", "Ghee"],
      dietary: ["Vegetarian"],
      price: "-",
      image:
        "https://images.pexels.com/photos/18488310/pexels-photo-18488310.jpeg",
    },
    {
      id: "ice-cream",
      name: [
        "Vanilla",
        "Strawberry",
        "Mango",
        "Butterscotch",
        "Pista",
        "Chocolate",
      ],
      description: "Ice Cream (Any One)",
      ingredients: ["Milk", "Cream", "Sugar", "Flavoring"],
      dietary: ["Vegetarian"],
      price: "-",
      image:
        "https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  // --- The `toggleExpanded` function is no longer needed ---

  const renderItemName = (name: string | string[]) => {
    if (Array.isArray(name)) {
      return (
        <ul className="text-center text-sm leading-tight space-y-1">
          {name.map((subName) => (
            <li key={subName}>{subName}</li>
          ))}
        </ul>
      );
    }
    return <p className="text-center font-semibold text-lg">{name}</p>;
  };

  const backgroundImageUrl = "https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg";

  return (
    <div
      className="min-h-screen pt-20"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50/90 to-secondary-50/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-5xl font-serif font-bold text-secondary-800 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            ARS Catering Menu
          </motion.h1>
          <p className="text-xl text-secondary-600">
            Handpicked South Indian Dishes from Bengaluru
          </p>
        </div>
      </section>

      {/* Menu Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {menuItems.map((item) => (
              <div key={item.id} className="flex justify-center">
                <div className="book">
                  {/* Front side */}
                  <div className="p-4 flex items-center justify-center h-full">
                    {renderItemName(item.name)}
                  </div>

                  {/* Cover (hover reveal) */}
                  <div className="cover flex flex-col items-center justify-center p-4">
                    <img
                      src={item.image}
                      alt={
                        Array.isArray(item.name) ? item.name.join(", ") : item.name
                      }
                      className="w-32 h-32 object-cover rounded-md mb-2 shadow-md"
                    />
                    <p className="text-sm text-center mt-2">{item.description}</p>

                    {/* --- REMOVED THE EXPAND BUTTON AND EXPANDED SECTION --- */}

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;