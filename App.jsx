import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./src/screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./src/screens/MealsOverviewScreen";
import MealsDetailScreen from "./src/screens/MealsDetailScreen";
import { createDrawerNavigator, DrawerContent } from "@react-navigation/drawer";
import FavoriteScreen from "./src/screens/FavoriteScreen";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";
import { store } from "./src/store/redux/store";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#0c0036",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        sceneContainerStyle: {
          backgroundColor: "#000220",
        },
        drawerContentStyle: {
          backgroundColor: "#0c0036",
        },
        drawerInactiveTintColor: "#fff",
        drawerActiveTintColor: "#9089f8",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color }) => (
            <Ionicons name="list" size={18} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Faviorites"
        component={FavoriteScreen}
        options={{
          title: "Favorites",
          drawerIcon: ({ color }) => (
            <Ionicons name="star" size={18} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: "#0c0036",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
              contentStyle: {
                backgroundColor: "#000220",
              },
            }}
          >
            <Stack.Screen
              name="DrawerScreen"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
            />
            <Stack.Screen name="MealsDetail" component={MealsDetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
