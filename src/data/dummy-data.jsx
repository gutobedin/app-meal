import Category from "../models/category";
import Meal from "../models/meal";

export const CATEGORIES = [
  new Category("c1", "Italian", "#f5428d"),
  new Category("c2", "Quick & Easy", "#f54242"),
  new Category("c3", "Hamburgers", "#f5a442"),
  new Category("c4", "German", "#f5d142"),
  new Category("c5", "Light & Lovely", "#368dff"),
  new Category("c6", "Exotic", "#41d95d"),
  new Category("c7", "Breakfast", "#9eecff"),
  new Category("c8", "Asian", "#b9ffb0"),
  new Category("c9", "French", "#ffc7ff"),
  new Category("c10", "Summer", "#47fced"),
];

export const MEALS = [
  new Meal(
    "m1",
    ["c1", "c2"],
    "Spaghetti with Tomato Sauce",
    "affordable",
    "simple",
    "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg",
    20,
    [
      "4 Tomatoes",
      "1 Tablespoon of Olive Oil",
      "1 Onion",
      "250g Spaghetti",
      "Spices",
      "Cheese (optional)",
    ],
    [
      "Cut the tomatoes and the onion into small pieces.",
      "Boil some water - add salt to it once it boils.",
      "Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.",
      "In the meantime, heaten up some olive oil and add the cut onion.",
      "After 2 minutes, add the tomato pieces, salt, pepper and your other spices.",
      "The sauce will be done once the spaghetti are.",
      "Feel free to add some cheese on top of the finished dish.",
    ],
    false,
    true,
    true,
    true
  ),
  new Meal(
    "m2",
    ["c2"],
    "Toast Hawaii",
    "affordable",
    "simple",
    "https://www.themealdb.com/images/media/meals/1549542877.jpg",
    10,
    [
      "2 Slices of White Bread",
      "2 Slices of Ham",
      "1 Slice of Pineapple",
      "1-2 Slices of Cheese",
      "Butter",
    ],
    [
      "Butter one side of the white bread",
      "Layer ham, the pineapple and cheese on the white bread",
      "Bake the toast for round about 10 minutes in the oven at 200°C",
    ],
    false,
    false,
    false,
    false
  ),
  new Meal(
    "m3",
    ["c3"],
    "Classic Hamburger",
    "pricey",
    "simple",
    "https://www.themealdb.com/images/media/meals/urzj1d1587670726.jpg",
    45,
    [
      "300g Cattle Hack",
      "1 Tomato",
      "1 Cucumber",
      "1 Onion",
      "Ketchup",
      "2 Burger Buns",
    ],
    [
      "Form 2 patties",
      "Fry the patties for c. 4 minutes on each side",
      "Quickly fry the buns for c. 1 minute on each side",
      "Bruch buns with ketchup",
      "Serve burger with tomato, cucumber and onion",
    ],
    false,
    false,
    false,
    true
  ),
  new Meal(
    "m4",
    ["c4"],
    "Wiener Schnitzel",
    "luxurious",
    "challenging",
    "https://www.themealdb.com/images/media/meals/1520084413.jpg",
    60,
    [
      "8 Veal Cutlets",
      "4 Eggs",
      "200g Bread Crumbs",
      "100g Flour",
      "300ml Butter",
      "100g Vegetable Oil",
      "Salt",
      "Lemon Slices",
    ],
    [
      "Tenderize the veal to about 2–4mm, and salt on both sides.",
      "On a flat plate, stir the eggs briefly with a fork.",
      "Lightly coat the cutlets in flour then dip into the egg, and finally coat in breadcrumbs.",
      "Heat the butter and oil in a large pan (allow the fat to get very hot) and fry the schnitzels until golden brown on both sides.",
      "Make sure to toss the pan regularly so that the schnitzels are surrounded by oil and the crumbing becomes ‘fluffy’.",
      "Remove, and drain on kitchen paper. Fry the parsley in the remaining oil and drain.",
      "Place the schnitzels on awarmed plate and serve garnishedwith parsley and slices of lemon.",
    ],
    false,
    false,
    false,
    false
  ),
  new Meal(
    "m5",
    ["c2", "c5", "c10"],
    "Salad with Smoked Salmon",
    "luxurious",
    "simple",
    "https://www.themealdb.com/images/media/meals/1549542994.jpg",
    15,
    [
      "Arugula",
      "Lamb's Lettuce",
      "Parsley",
      "Fennel",
      "200g Smoked Salmon",
      "Mustard",
      "Balsamic Vinegar",
      "Olive Oil",
    ],
    [
      "Wash and cut salad and herbs",
      "Dice the salmon",
      "Process mustard, vinegar and olive oil into a dessing",
      "Prepare the salad",
      "Add salmon cubes and dressing",
    ],
    true,
    false,
    true,
    true
  ),
  new Meal(
    "m6",
    ["c6"],
    "Tunisian Orange Cake",
    "affordable",
    "hard",
    "https://www.themealdb.com/images/media/meals/y4jpgq1560459207.jpg",
    240,
    [
      "4 Sheets of Gelatine",
      "150ml Orange Juice",
      "80g Sugar",
      "300g Yoghurt",
      "200g Cream",
      "Orange Peel",
    ],
    [
      "Dissolve gelatine in pot",
      "Add orange juice and sugar",
      "Take pot off the stove",
      "Add 2 tablespoons of yoghurt",
      "Stir gelatin under remaining yoghurt",
      "Cool everything down in the refrigerator",
      "Whip the cream and lift it under die orange mass",
      "Cool down again for at least 4 hours",
      "Serve with orange peel",
    ],
    true,
    false,
    true,
    false
  ),
  new Meal(
    "m7",
    ["c7"],
    "Pancakes",
    "affordable",
    "simple",
    "https://www.themealdb.com/images/media/meals/rwuyqx1511383174.jpg",
    20,
    [
      "1 1/2 Cups of all-purpose Flour",
      "3 1/2 Teaspoons of Baking Powder",
      "1 Teaspoon of Salt",
      "1 Tablespoon of White Sugar",
      "1 1/4 Cups of Milk",
      "1 Egg",
      "3 Tablespoons of Butter, melted",
    ],
    [
      "In a bowl, mix together the flour, baking powder, salt and sugar",
      "Add the milk and egg, stir until combined",
      "Finally, stir in the melted butter",
      "Heat a lightly oiled griddle or frying pan over medium high heat",
      "Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake",
      "Brown on both sides and serve hot",
    ],
    true,
    false,
    true,
    false
  ),
  new Meal(
    "m8",
    ["c8"],
    "Chicken Handi",
    "pricey",
    "challenging",
    "https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg",
    35,
    [
      "4 Chicken Breasts",
      "1 Onion",
      "2 Cloves of Garlic",
      "1 Piece of Ginger",
      "4 Tablespoons Almonds",
      "1 Teaspoon Cayenne Pepper",
      "500ml Coconut Milk",
    ],
    [
      "Slice and fry the chicken breast",
      "Process onion, garlic and ginger into paste and sauté everything",
      "Add spices and stir fry",
      "Add chicken breast + 250ml of water and cook everything for 10 minutes",
      "Add coconut milk",
      "Serve with rice",
    ],
    false,
    false,
    false,
    true
  ),
  new Meal(
    "m9",
    ["c9"],
    "Chocolate Souffle",
    "affordable",
    "hard",
    "https://www.themealdb.com/images/media/meals/twspvx1511784937.jpg",
    45,
    [
      "1 Teaspoon melted Butter",
      "2 Tablespoons white Sugar",
      "2 Ounces 70% dark Chocolate, broken into pieces",
      "1 Tablespoon Butter",
      "1 Tablespoon all-purpose Flour",
      "4 1/3 tablespoons cold Milk",
      "1 Pinch Salt",
      "1 Pinch Cayenne Pepper",
      "1 Large Egg Yolk",
      "2 Large Egg Whites",
      "1 Pinch Cream of Tartar",
      "1 Tablespoon white Sugar",
    ],
    [
      "Preheat oven to 190°C",
      "Butter the inside of a  soufflé dish with the melted butter and coat with white sugar",
      "Melt the dark chocolate in a saucepan over low heat",
      "Stir in the butter",
      "Dust with flour and add the cold milk",
      "Mix until smooth",
      "Remove from heat and stir in salt, cayenne pepper, and egg yolks",
      "In a bowl, beat egg whites with cream of tartar until foamy",
      "Gradually add 1 tablespoon of sugar, and continue beating until the whites form stiff peaks",
      "Fold the chocolate mixture into the egg whites",
      "Quickly pour into the soufflé dish",
      "Place dish in the preheated oven",
      "Bake for 12 minutes",
    ],
    true,
    false,
    true,
    false
  ),
  new Meal(
    "m10",
    ["c2", "c5", "c10"],
    "Apple Frangipan Tart",
    "luxurious",
    "simple",
    "https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg",
    30,
    [
      "White and Green Asparagus",
      "Cherry Tomatoes",
      "Salad",
      "Basil",
      "Parsley",
      "Chives",
      "1 Shallot",
      "Salt, Pepper, Sugar",
      "White Wine Vinegar",
      "Olive Oil",
    ],
    [
      "Wash, peel and cut the asparagus",
      "Cook in salted water",
      "Salt, pepper and sugar",
      "Mix vinegar and oil",
      "Chop up the herbs",
      "Halve the tomatoes",
      "Mix with the asparagus",
      "Add dressing",
      "Serve",
    ],
    true,
    true,
    true,
    true
  ),
];
