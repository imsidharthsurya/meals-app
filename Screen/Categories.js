import { View, Text, FlatList, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import Category from "../Components/Category";

const Categories = () => {
  const renderCategory = (itemData) => {
    return (
      <Category
        title={itemData?.item.title}
        color={itemData.item.color}
        categoryId={itemData.item.id}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text>Categories</Text>
      <View>
        <FlatList
          data={CATEGORIES}
          keyExtractor={(item) => item?.id}
          renderItem={renderCategory}
          numColumns={2}
        />
      </View>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    alignItems: "center",
  },
});
