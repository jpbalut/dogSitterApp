import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ImageBackground } from 'react-native';

import { Input } from '../../components';
import SERVICES from '../../constants/data/services.json';
import { COLORS } from '../../themes';
import ProductDetails from '../productDetails';
import { styles } from '../services/styles';

const Services = ({ navigation, route }) => {
  const { categoryId, colors } = route.params;
  const [search, setSearch] = useState('');
  const [filteredServices, setfilteredServices] = useState([]);
  const [borderColor, setBorderColor] = useState(COLORS.primary);

  const [isProductSelected, setIsProductSelected] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const onHandlerBlur = () => {};
  const onHandlerChangeText = (text) => {
    setSearch(text);
    filterBySearch(text);
  };
  const onHandlerFocus = () => {};

  const filteredServicesByCategory = SERVICES.filter(
    (service) => service.categoryId === categoryId
  );
  const filterBySearch = (query) => {
    let updatedServiceList = [...filteredServicesByCategory];
    updatedServiceList = updatedServiceList.filter((product) => {
      return product.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    setfilteredServices(updatedServiceList);
  };
  const clearSearch = () => {
    setSearch('');
    setfilteredServices([]);
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
        <ProductDetails selectedProduct={selectedProduct} />
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
            data={search.length > 0 ? filteredServices : filteredServicesByCategory}
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
                  <Text
                    style={
                      styles.productPrice
                    }>{`${item.currency.code}$${item.pricePerHour}`}</Text>
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
      {filteredServices.length === 0 && search.length > 0 && (
        <View style={styles.notFound}>
          <Text style={styles.notFoundText}> No Products Found</Text>
        </View>
      )}
    </View>
  );
};

export default Services;
