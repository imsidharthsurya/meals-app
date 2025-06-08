import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";

const MealsScreen = ({ navigation }) => {
  const route = useRoute();
  const categoryId = route.params.categoryId;
  const meals = MEALS.filter((meal) => {
    return meal.categoryIds.includes(categoryId);
  });

  useEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => {
      return category.id === categoryId;
    }).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  const handleNavigaeMealsInfo = (mealId) => {
    navigation.navigate("mealsInfo", {
      mealId: mealId,
    });
  };
  return (
    <View style={styles.mealContainer}>
      <Text>Meals Screen: {categoryId}</Text>
      <View>
        <ScrollView>
          {meals.map((meal) => {
            return (
              <View style={styles.cont}>
                <Pressable
                  android_ripple={{ color: "green" }}
                  onPress={() => handleNavigaeMealsInfo(meal.id)}
                >
                  <View style={styles.mealCard}>
                    <Image
                      source={{ uri: meal?.imageUrl }}
                      style={styles.img}
                    />
                    <Text key={meal?.id} style={styles.title}>
                      {meal?.title}
                    </Text>
                  </View>
                </Pressable>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default MealsScreen;

const styles = StyleSheet.create({
  mealContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  img: {
    height: 200,
    width: 200,
  },
  cont: {
    marginVertical: 20,
    backgroundColor: "white",
    elevation: 8,
  },
  mealCard: {
    alignItems: "center",
    borderRadius: 8,
    overflow: "hidden",
  },
  title: {
    paddingVertical: 20,
  },
});
