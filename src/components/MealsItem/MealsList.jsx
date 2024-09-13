import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "../MealItem";

export default function MealsList({ items }) {
  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      idMeal: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...mealItemProps} />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
