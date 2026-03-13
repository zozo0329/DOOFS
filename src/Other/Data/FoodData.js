
// ADD ONS

const FriedChickenAddOn = [{
  name: "Gravy", 
  price: 10,
  id: "GravyAddOn1",
},
{
name: "Tomato Ketchup",
price: 0,
id: "TomatoKetchupAddOn1",
},
{name: "Banana Ketchup",
price: 0,
id: "BananaKetchupAddOn1", }
];
const LumpiaAddOn = [{
name: "Tomato Ketchup",
price: 0,
id: "TomatoKetchupAddOn1",
},
{name: "Banana Ketchup",
price: 0,
id: "BananaKetchupAddOn1", 
},]

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
    addOns: [],
  },
  {
    name: "Lechon Kawali",
    price: 450,
    description: "Good for 4 people,  Served with a side of Vinegar and Chili.",
    Image:
      "https://www.seriouseats.com/thmb/UlhzxqvVs8whAL-HsPK1ZvQMjj8=/1500x1125/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2015__01__20150102-lechon-kawali-first-finished-joshua-bousel-ad06cbac80af4886a6183f9041a61d9e.jpg",
    id: "FriedModal4",
    addOns: [],
  },
  {
    name: "Crispy Pata",
    price: 500,
    description: "Good for 4 people,  Served with a side of Vinegar and Chili.",
    Image:
      "https://i.pinimg.com/736x/18/2f/4b/182f4b5f937cf960f6ebb23aab41d3fd.jpg",
    id: "FriedModal5",
    addOns: [],

  },
];
const PastaFoods = [{
  name: "Spaghetti",
  description: "All time favorite classic filipino spaghetti",
  Image:
    "https://panlasangpinoy.com/wp-content/uploads/2015/05/Filipino-Spaghetti-Panlasang-Pinoy-800x526.jpg",
  id: "PastaModal1",
},
{name: "Carbonara",
 description: "Creamy carbonara with bacon and parmesan", 
 Image: "https://yummykitchentv.com/wp-content/uploads/2022/11/creamy-carbonara-recipe.jpg", 
 id: "PastaModal2"},
 {name: "Pansit", description: "Delicious Filipino noodle dish", Image: "https://i.pinimg.com/736x/ba/1f/40/ba1f40c4e8befb35f6dd3de3b0d167d3.jpg", id: "PastaModal3"},
 {name: "Cheesy Baked Macaroni",
  description: "Baked macaroni with a cheesy twist",
  Image: "https://ameessavorydish.com/wp-content/uploads/2011/03/Baked-mac-and-cheese-feature.jpg",
  id: "PastaModal4"},
];


const FoodData = [
  {Category: "Fried Foods", FoodItem: FriedFoods , id: "FriedFoods01"},
  {Category: "Pasta Dishes", FoodItem: PastaFoods , id: "PastaFoods01"},
];

export default FoodData;
