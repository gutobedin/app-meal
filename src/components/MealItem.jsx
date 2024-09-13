import {
  Text,
  View,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "./MealsDetails";

export default function MealItem({
  idMeal,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) {
  const navigation = useNavigation();
  function handleButtonPress() {
    navigation.navigate("MealsDetail", {
      mealId: idMeal,
    });
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        onPress={handleButtonPress}
        style={({ pressed }) => [pressed && styles.buttonPressed]}
      >
        <View>
          <Image style={styles.image} source={{ uri: imageUrl }} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <MealDetails
          duration={duration}
          affordability={affordability}
          complexity={complexity}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
  },
  buttonPressed: {
    opacity: 0.8,
  },

  title: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    margin: 8,
  },
  mealItem: {
    padding: 10,
    margin: 16,
    backgroundColor: "white",
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    shadowColor: "black",
    shadowOpacity: 36,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
});
