import { View, Text, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Category = ({ title, color, categoryId }) => {
  const navigation = useNavigation();

  const onHandlePress = () => {
    navigation.navigate("meals", {
      categoryId: categoryId,
    });
  };
  return (
    <View style={[styles.btnCont, { backgroundColor: color, elevation: 6 }]}>
      <Pressable
        onPress={onHandlePress}
        android_ripple={{ color: "#ccc" }}
        style={{ flex: 1 }}
      >
        <View style={styles.midCont}>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  btnCont: {
    margin: 5,
    height: 150,
    width: 150,
    borderRadius: 18,
    overflow: "hidden",
  },
  midCont: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
