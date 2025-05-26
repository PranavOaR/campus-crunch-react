export const products = [
  {
    id: 1,
    name: "Lecture Loops",
    price: 150,
    image: "/p1front.jpeg",
    backImage: "/p1back.jpeg",
    bowlImage: "/p1bowl.jpeg",
    onTheGoImage: "/p1man.jpeg",
    smallImage: "/p1small.jpeg",
    description: "Crispy cereal loops that keep you focused during long lectures. Perfect for breakfast or study snacks.",
    detailedDescription: "Our signature Lecture Loops are made with whole grain oats and fortified with essential vitamins and minerals. These crunchy loops provide sustained energy to keep you alert during those marathon study sessions. Each serving delivers the perfect balance of carbohydrates and protein to fuel your brain.",
    ingredients: ["Whole grain oats", "Rice flour", "Sugar", "Salt", "Natural flavors", "Vitamins & minerals"],
    nutrition: {
      calories: 110,
      protein: "3g",
      carbs: "22g",
      fat: "2g",
      fiber: "3g",
      sugar: "6g",
      servingSize: "30g (1 cup)"
    },
    category: "breakfast",
    isOnTheGo: true
  },
  {
    id: 2,
    name: "Nuttery Good",
    price: 70,
    image: "/p2front.jpeg",
    backImage: "/p2back.jpeg",
    bowlImage: "/p2bowl.jpeg",
    onTheGoImage: "/p2onthego.jpeg",
    description: "A delicious mix of nuts and dried fruits. The perfect energy boost for busy students.",
    detailedDescription: "Nuttery Good is a premium trail mix featuring carefully selected nuts and dried fruits. This protein-rich snack provides sustained energy and essential nutrients. Perfect for between classes or during late-night study sessions.",
    ingredients: ["Almonds", "Cashews", "Raisins", "Dried cranberries", "Walnuts", "Sea salt"],
    nutrition: {
      calories: 160,
      protein: "6g",
      carbs: "12g",
      fat: "12g",
      fiber: "3g",
      sugar: "8g",
      servingSize: "28g (1/4 cup)"
    },
    category: "snacks",
    isOnTheGo: true
  },
  {
    id: 3,
    name: "Dairy Dash",
    price: 100,
    image: "/p3.jpeg",
    backImage: "/p3back.jpeg",
    bowlImage: "/p3bowl.jpeg",
    altImage: "/p3alt.jpeg",
    description: "Creamy yogurt drink packed with probiotics. Refreshing and nutritious for on-the-go consumption.",
    detailedDescription: "Dairy Dash is a refreshing probiotic yogurt drink that supports digestive health while providing essential nutrients. Made with real fruit and live cultures, it's the perfect healthy beverage for active students.",
    ingredients: ["Cultured milk", "Sugar", "Natural strawberry flavor", "Pectin", "Live cultures"],
    nutrition: {
      calories: 120,
      protein: "8g",
      carbs: "18g",
      fat: "2g",
      fiber: "0g",
      sugar: "16g",
      servingSize: "200ml (1 bottle)"
    },
    category: "drinks",
    isOnTheGo: false
  },
  {
    id: 4,
    name: "Pophana",
    price: 60,
    image: "/p4front.jpeg",
    backImage: "/p4back.jpeg",
    bowlImage: "/p4bowl.jpeg",
    onTheGoImage: "/p4onthego.jpeg",
    altImage: "/p4alt.jpeg",
    description: "Banana-flavored popcorn that's both sweet and satisfying. A unique twist on traditional snacking.",
    detailedDescription: "Pophana combines the wholesome goodness of air-popped corn with the natural sweetness of banana. This guilt-free snack is high in fiber and provides a satisfying crunch that's perfect for movie nights or study breaks.",
    ingredients: ["Popcorn", "Banana powder", "Sugar", "Salt", "Natural banana flavor", "Coconut oil"],
    nutrition: {
      calories: 140,
      protein: "3g",
      carbs: "28g",
      fat: "3g",
      fiber: "4g",
      sugar: "8g",
      servingSize: "25g (2 cups popped)"
    },
    category: "snacks",
    isOnTheGo: true
  }
];

export const combos = [
  {
    id: "breakfast",
    name: "Breakfast Combo",
    description: "Start your day right with our energizing breakfast combo",
    detailedDescription: "The perfect morning fuel for students. Combines our popular Lecture Loops cereal with a refreshing Dairy Dash drink to give you the energy and nutrients needed to tackle your day.",
    products: [1, 3], // Lecture Loops + Dairy Dash
    originalPrice: 250,
    comboPrice: 200,
    savings: 50,
    image: "/Breakfast.jpeg"
  },
  {
    id: "snacks",
    name: "Snack Attack Combo",
    description: "Perfect snacking combo for those study sessions",
    detailedDescription: "When hunger strikes during study time, this combo has you covered. Nuttery Good provides protein and healthy fats, while Pophana satisfies your sweet tooth with wholesome ingredients.",
    products: [2, 4], // Nuttery Good + Pophana
    originalPrice: 130,
    comboPrice: 110,
    savings: 20,
    image: "/snackcombo.jpeg"
  },
  {
    id: "mega",
    name: "Mega Pack Combo",
    description: "Everything you need to power through your studies",
    detailedDescription: "The ultimate student survival pack! This comprehensive combo includes all our bestsellers - perfect for stocking up your dorm room or sharing with study buddies.",
    products: [1, 2, 3, 4], // All products
    originalPrice: 380,
    comboPrice: 320,
    savings: 60,
    image: "/Mega.jpeg"
  }
];

export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};

export const getComboById = (id) => {
  return combos.find(combo => combo.id === id);
};

export const getProductsByCategory = (category) => {
  return products.filter(product => product.category === category);
};

export const getOnTheGoProducts = () => {
  return products.filter(product => product.isOnTheGo);
};

export const searchProducts = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.category.toLowerCase().includes(lowercaseQuery)
  );
}; 