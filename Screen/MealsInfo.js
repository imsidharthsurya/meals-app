import { useEffect } from "react";
import { View, Text, Button } from "react-native";

const MealsInfo = ({ route, navigation }) => {
  const mealId = route.params.mealId;
  const handleFavorite = (id) => {
    console.log(`add meal id: ${id} to the favorite`);
  };
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Button title="Favorite" onPress={() => handleFavorite(mealId)} />
        );
      },
    });
  }, [navigation, mealId]);

  return (
    <View>
      <Text>MealsInfo {mealId}</Text>
    </View>
  );
};

export default MealsInfo;
