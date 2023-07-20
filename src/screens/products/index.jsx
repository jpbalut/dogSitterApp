import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ImageBackground } from 'react-native';

import { styles } from './styles';
import { Input } from '../../components';
import PRODUCTS from '../../constants/data/products.json';
import { COLORS } from '../../themes';

function Products({ navigate, route }) {
  const { categoryId, colors } = route.params;
  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [borderColor, setBorderColor] = useState(COLORS.primary);

  const [isProductSelected, setIsProductSelected] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const onHandlerBlur = () => {};
  const onHandlerChangeText = (text) => {
    setSearch(text);
    filterBySearch(text);
  };
  const onHandlerFocus = () => {};

  const filteredProductsByCategory = PRODUCTS.filter(
    (product) => product.categoryId === categoryId
  );
  const filterBySearch = (query) => {
    let updatedProductList = [...filteredProductsByCategory];
    updatedProductList = updatedProductList.filter((product) => {
      return product.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    setFilteredProducts(updatedProductList);
  };
  const clearSearch = () => {
    setSearch('');
    setFilteredProducts([]);
  };

  const onHandleSelectProduct = (id) => {
    setSelectedProduct({ id });
    setIsProductSelected(!isProductSelected);
  };
  const onHandleNavigateProd = () => {
    setIsProductSelected(!isProductSelected);
    setSelectedProduct(null);
  };
  return (
    <View style={styles.container}>
      <Text>Productos</Text>
      {isProductSelected ? (
        <ProductsDetails selectedProduct={selectedProduct} />
      ) : (
        <>
          <View style={styles.header}>
            <Input
              borderColor={borderColor}
              onHandlerBlur={onHandlerBlur}
              onHandlerChangeText={onHandlerChangeText}
              onHandlerFocus={onHandlerFocus}
              value={search}
              placeholder="Search"
            />
            {search.length > 0 && (
              <Ionicons
                style={styles.clearIcon}
                onPress={clearSearch}
                name="close-circle"
                size={25}
                color={COLORS.black}
              />
            )}
          </View>
          <FlatList
            style={styles.products}
            data={search.length > 0 ? filteredProducts : filteredProductsByCategory}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => onHandleSelectProduct(item.id)}
                style={styles.productContainer}>
                <ImageBackground
                  source={{ uri: item.image }}
                  style={[styles.productImage]}
                  resizeMethod="resize"
                  resizeMode="contain"
                />
                <View style={styles.productDetail}>
                  <Text style={styles.productName} numberOfLines={1} ellipsizeMode="tail">
                    {item.name}
                  </Text>
                  <Text style={styles.productPrice}>{`${item.currency.code}$${item.price}`}</Text>
                </View>
              </TouchableOpacity>
            )}
            contentContainerStyle={styles.productContent}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            showsVerticalScrollIndicator={false}
          />
        </>
      )}
      {filteredProducts.length === 0 && search.length > 0 && (
        <View style={styles.notFound}>
          <Text style={styles.notFoundText}> No Products Found</Text>
        </View>
      )}
    </View>
  );
}

export default Products;
