import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Categories from "./Screen/Categories";
import MealsScreen from "./Screen/MealsScreen";
import MealsInfo from "./Screen/MealsInfo";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Favorite from "./Screen/Favorite";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const drawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
      }}
    >
      <Drawer.Screen
        name="Categorylist"
        component={Categories}
        options={{
          title: "All Categories",
        }}
      />
      <Drawer.Screen name="Favorite" component={Favorite} />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#351401" },
          headerTintColor: "white",
          contentStyle: { backgroundColor: "#3f2f25" },
        }}
      >
        <Stack.Screen
          name="categories"
          component={drawerNavigator}
          options={{
            title: "All Category",
            headerShown: false,
          }}
        />
        <Stack.Screen name="meals" component={MealsScreen} />
        <Stack.Screen name="mealsInfo" component={MealsInfo} />
      </Stack.Navigator>
    </NavigationContainer>
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
