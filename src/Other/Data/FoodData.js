// ADD ONS
// Fried Add Ons
const FriedChickenAddOn = [
  {
    name: "Gravy",
    price: 10,
    id: "GravyAddOn1",
  },
  {
    name: "Tomato Ketchup",
    price: 0,
    id: "TomatoKetchupAddOn1",
  },
  { name: "Banana Ketchup", price: 0, id: "BananaKetchupAddOn1" },
];
const LumpiaAddOn = [
  {
    name: "Tomato Ketchup",
    price: 0,
    id: "TomatoKetchupAddOn1",
  },
  { name: "Banana Ketchup", price: 0, id: "BananaKetchupAddOn1" },
];
const FriedBangusAddOn = [
  { name: "Soy Sauce with calamansi", price: 0, id: "SoySauceAddOn1" },
  { name: "Vinegar with chili", price: 0, id: "VinegarAddOn1" },
];
const LechonKawaliAddOn = [
  { name: "Gravy", price: 10, id: "Gravy01" },
  { name: "Vinegar with chili", price: 0, id: "VinegarAddOn1" },
  { name: "Soy Sauce with calamansi", price: 0, id: "SoySauceAddOn1" },
];
const CrispyPataAddOn = [
  { name: "Gravy", price: 10, id: "Gravy01" },
  { name: "Soy Sauce with calamansi", price: 0, id: "SoySauceAddOn1" },
  { name: "Vinegar with chili", price: 0, id: "VinegarAddOn1" },
];
// Pasta Add Ons
const spaghettiAddOns = [
  { id: "sp1", name: "Cheese", price: 20 },
  { id: "sp2", name: "Meatballs", price: 40 },
  { id: "sp3", name: "Extra Sauce", price: 15 },
  { id: "sp4", name: "Bacon Bits", price: 25 },
  { id: "sp5", name: "Mushrooms", price: 20 },
];
const carbonaraAddOns = [
  { id: "c1", name: "Extra Bacon", price: 30 },
  { id: "c2", name: "Parmesan Cheese", price: 25 },
  { id: "c3", name: "Mushrooms", price: 20 },
  { id: "c4", name: "Garlic Bread", price: 35 },
];
const pansitAddOns = [
  { id: "p1", name: "Extra Veggies", price: 15 },
  { id: "p2", name: "Chicken", price: 30 },
  { id: "p3", name: "Shrimp", price: 40 },
  { id: "p4", name: "Boiled Egg", price: 10 },
];
const bakedMacaroniAddOns = [
  { id: "m1", name: "Extra Cheese", price: 25 },
  { id: "m2", name: "Bacon Bits", price: 30 },
  { id: "m3", name: "Breadcrumbs Topping", price: 15 },
  { id: "m4", name: "Mushrooms", price: 20 },
];
// DISHES
const FriedFoods = [
  {
    name: "Fried Chicken",
    price: 250,
    description:
      "8 pcs of crispy fried chicken,  Served with a side of tangy dipping sauce.",
    Image:
      "https://www.skilledcooks.com/wp-content/uploads/2023/11/cocinar0716_httpss.mj_.run68mX-wV7A38_Amateur_photo_from_faceb_f1607ba9-9c73-4220-ab8a-5b6aec5cf571_3.png",
    id: "FriedModal1",
    addOns: FriedChickenAddOn,
  },
  {
    name: "Fried Lumpia",
    price: 150,
    description: "25 pcs of Fried Lumpia,  Served with a dipping sauce.",
    Image:
      "https://thebrilliantkitchen.com/wp-content/uploads/2022/08/Egg-Rolls.jpg",
    id: "FriedModal2",
    addOns: LumpiaAddOn,
  },
  {
    name: "Fried Bangus",
    price: 300,
    description: "4 pcs of Fried Bangus,  Served with a side of Soy sauce.",
    Image:
      "https://cdn.tastephilippines.com/wp-content/uploads/2022/10/golden-brown-fried-bangus-from-the-Philippines-768x768.jpg?strip=all&lossy=1&ssl=1",
    id: "FriedModal3",
    addOns: FriedBangusAddOn,
  },
  {
    name: "Lechon Kawali",
    price: 450,
    description: "Good for 4 people,  Served with a side of Vinegar and Chili.",
    Image:
      "https://www.seriouseats.com/thmb/UlhzxqvVs8whAL-HsPK1ZvQMjj8=/1500x1125/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2015__01__20150102-lechon-kawali-first-finished-joshua-bousel-ad06cbac80af4886a6183f9041a61d9e.jpg",
    id: "FriedModal4",
    addOns: LechonKawaliAddOn,
  },
  {
    name: "Crispy Pata",
    price: 500,
    description: "Good for 4 people,  Served with a side of Vinegar and Chili.",
    Image:
      "https://i.pinimg.com/736x/18/2f/4b/182f4b5f937cf960f6ebb23aab41d3fd.jpg",
    id: "FriedModal5",
    addOns: CrispyPataAddOn,
  },
];
const PastaFoods = [
  {
    name: "Spaghetti",
    price: 120,
    description: "All time favorite classic filipino spaghetti",
    Image:
      "https://panlasangpinoy.com/wp-content/uploads/2015/05/Filipino-Spaghetti-Panlasang-Pinoy-800x526.jpg",
    id: "PastaModal1",
    addOns: spaghettiAddOns,
  },
  {
    name: "Carbonara",
    price: 140,
    description: "Creamy carbonara with bacon and parmesan",
    Image:
      "https://yummykitchentv.com/wp-content/uploads/2022/11/creamy-carbonara-recipe.jpg",
    id: "PastaModal2",
    addOns: carbonaraAddOns,
  },
  {
    name: "Pansit",
    price: 100,
    description: "Delicious Filipino noodle dish good for 4 people",
    Image:
      "https://i.pinimg.com/736x/ba/1f/40/ba1f40c4e8befb35f6dd3de3b0d167d3.jpg",
    id: "PastaModal3",
    addOns: pansitAddOns,
  },
  {
    name: "Cheesy Baked Macaroni",
    price: 140,
    description: "Baked macaroni with a cheesy twist",
    Image:
      "https://ameessavorydish.com/wp-content/uploads/2011/03/Baked-mac-and-cheese-feature.jpg",
    id: "PastaModal4",
    addOns: bakedMacaroniAddOns,
  },
];
const Salads = [];
const Combos = [];
const Appetizers = [];
const Beverages = [];
const Desserts = [];

const FoodData = [
  { Category: "Fried Foods", FoodItem: FriedFoods, id: "FriedFoods01" },
  { Category: "Our Pastas", FoodItem: PastaFoods, id: "PastaFoods01" },
  { Category: "Salads", FoodItem: Salads, id: "Salads01" },
  { Category: "Special Combos", FoodItem: Combos, id: "Combos01" },
  { Category: "Appetizers", FoodItem: Appetizers, id: "Appetizers01" },
  { Category: "Beverages", FoodItem: Beverages, id: "Beverages01" },
  { Category: "Desserts", FoodItem: Desserts, id: "Desserts01" },
];

export default FoodData;
