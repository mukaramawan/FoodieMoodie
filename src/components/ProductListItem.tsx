import { StyleSheet, Text, View, Image, Pressable } from "react-native";
//import products from '@/assets/data/products';
import { Product } from "../types";
import { Link } from "expo-router";

export const defaultPizzaImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/6cheese.png";

type ProductListItemProps = { product: Product };

const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <Link href={"/productDetails"} asChild>

      <Pressable style={styles.container}>

        <Image
          source={{ uri: product.image || defaultPizzaImage }}
          style={styles.image}
          resizeMode="contain"
        />

        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.title}>${product.price}</Text>

      </Pressable>

    </Link>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    flex: 1,
    margin: 5,
    maxWidth: "50%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});
