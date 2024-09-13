import { useEffect } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import MealsDetails from "../components/MealsDetails";
import IconButton from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

export default function MealsDetailScreen({ route, navigation }) {
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const mealIsFavorite = favoriteMealIds.includes(mealId);

  function changeFavoriteStatusHandler() {
    if (mealIsFavorite) {
      dispatch(removeFavorite({ id: mealId }));
    } else {
      dispatch(addFavorite({ id: mealId }));
    }
  }

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon="star"
            color={mealIsFavorite ? "yellow" : "white"}
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealsDetails
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
        duration={selectedMeal.duration}
        textStyle={styles.detailText}
        style={styles.detailContainer}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Text style={styles.subtitle}>INGREDIENTS</Text>
          {selectedMeal.ingredients.map((ingredient) => (
            <View style={styles.listItem} key={ingredient}>
              <Text style={styles.itemText}>{ingredient}</Text>
            </View>
          ))}
          <Text style={styles.subtitle}>STEPS</Text>
          {selectedMeal.steps.map((step) => (
            <View style={styles.listItem} key={step}>
              <Text style={styles.itemText}>{step}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
    margin: 12,
    textAlign: "center",
  },
  detailText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  detailContainer: {
    backgroundColor: "white",
    padding: 2,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  subtitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    margin: 10,
    textAlign: "center",
  },
  listItem: {
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#ffffff",
  },
  itemText: {
    fontSize: 16,
    textAlign: "center",
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});
