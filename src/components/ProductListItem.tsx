import { StyleSheet, Text, View, Image } from 'react-native';
import products from '@/assets/data/products';

const ProductListItem = ({product}) => {
  return (
    <View style={styles.container}>
    <Image source={{uri: product.image}} style={styles.image}/>
    <Text style={styles.title}>{product.name}</Text>
    <Text style={styles.title}>${product.price}</Text>
    
  </View>
  );
}

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  }

});
