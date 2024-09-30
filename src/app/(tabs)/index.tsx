import {View, FlatList} from 'react-native';
import ProductListItem from "@/src/components/ProductListItem";
import products from '@/assets/data/products';

export default function MenueScreen() {
  return (
    <View>
          <FlatList 
              data={products}
              renderItem={({item}) => <ProductListItem product={item} />}
              numColumns={2}
          />

    </View>
  );
}