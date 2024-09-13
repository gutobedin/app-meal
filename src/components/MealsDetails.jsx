import { StyleSheet, Text, View } from "react-native";

export default function MealDetails({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detialItem, textStyle]}>{duration}m</Text>
      <Text style={[styles.detialItem, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detialItem, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    padding: 10,
    gap: 3,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#0c0036",
    borderRadius: 5,
  },
  detialItem: {
    marginHorizontal: 4,
    fontSize: 13,
    color: "white",
    fontWeight: "bold",
  },
});
