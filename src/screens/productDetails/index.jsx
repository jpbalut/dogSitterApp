import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacityBase,
  TouchableHighlight,
} from 'react-native';

import { styles } from './styles';
import PRODUCTS from '../../constants/data/products.json';
import { COLORS } from '../../themes';

function ProductsDetails({ navigation, route }) {
  const { color, productId } = route.params;
  const product = PRODUCTS.find((product) => product.id === productId);
  return (
    <View style={styles.container}>
      <Text>Detalles Producto</Text>
      <TouchableOpacity style={styles.goBack} onPress={onHandleGoBack}>
        <Ionicons name="arrow-back-circle" size={25} color={COLORS.black} />
        <Text style={styles.goBackText}>Go Back</Text>
      </TouchableOpacity>
      <ImageBackground source={{ uri: producto[0].image }} style={styles.productImage} />
      <View style={styles.productTitle}>
        <Text style={styles.productTitleText}>{producto[0].name}</Text>
      </View>
      <View style={styles.productDescription}>
        <Text style={styles.productDescriptionText}>{producto[0].description}</Text>
      </View>
      <View style={styles.productPrice}>
        <Text style={styles.productPriceText}>
          {producto[0].currency.code}${producto[0].price}
        </Text>
      </View>
      <TouchableHighlight>
        <Text>Comprar</Text>
      </TouchableHighlight>
      <View style={styles.tagContainer}>
        {producto[0].tags.length !== 0 && (
          <Text>
            Tags:
            {producto[0].tags.map((elem) => (
              <View style={styles.productTag}>
                <Text>{elem} </Text>
              </View>
            ))}
          </Text>
        )}
      </View>
    </View>
  );
}

export default ProductsDetails;
