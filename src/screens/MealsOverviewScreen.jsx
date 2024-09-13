import { useEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealsList from "../components/MealsItem/MealsList";

export default function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.includes(catId);
  });

  useEffect(() => {
    const category = CATEGORIES.find((category) => category.id === catId);
    navigation.setOptions({
      title: category.title,
    });
  }, [catId, navigation]);

  return <MealsList items={displayedMeals} />;
}
