import { StyleSheet, Text, View, Image } from 'react-native';
import products from '@/assets/data/products';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image source={{uri:products[0].image}} style={styles.image}/>
      <Text style={styles.title}>{products[0].name}</Text>
      <Text style={styles.title}>${products[0].price}</Text>

      <Image source={{uri:products[1].image}} style={styles.image}/>
      <Text style={styles.title}>{products[1].name}</Text>
      <Text style={styles.title}>${products[1].price}</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  image: {
    width: 100,
    height: 100,
  },

});
