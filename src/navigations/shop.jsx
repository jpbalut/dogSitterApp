import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Categories, Products, ProductDetails } from '../screens';
import { COLORS } from '../themes';

const Stack = createNativeStackNavigator();

function ShopNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primary, height: 80 },
        headerTitleStyle: { fontFamily: 'Inter-Bold', fontSize: 16 },
        headerTintColor: COLORS.white,
        animation: 'fade_from_bottom',
      }}>
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen
        name="Products"
        component={Products}
        options={({ navigation, route }) => ({
          headerStyle: {
            backgroundColor: route.params.color,
          },
          headerLeft: () => (
            <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back-circle" size={30} color={COLORS.black} />
            </TouchableOpacity>
          ),
          title: route.params.name,
        })}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={({ navigation, route }) => ({
          headerStyle: {
            backgroundColor: route.params.color,
          },
          headerLeft: () => (
            <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back-circle" size={30} color={COLORS.black} />
            </TouchableOpacity>
          ),
          title: route.params.name,
        })}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  goBack: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  goBackText: {
    fontSize: 14,
    color: COLORS.text,
  },
});

export default ShopNavigator;
