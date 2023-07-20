import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Services } from '../screens';
import ServicesCategories from '../screens/serviceCategories';
import { COLORS } from '../themes';
const Stack = createNativeStackNavigator();

const ServicesNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="ServicesCategories"
      screenOptions={{
        presentation: 'modal',
        headerStyle: { backgroundColor: COLORS.primary },
        headerTitleStyle: { fontFamily: 'Inter-Bold', fontSize: 16 },
        headerTintColor: COLORS.white,
      }}>
      <Stack.Screen name="ServicesCategories" component={ServicesCategories} />
      <Stack.Screen
        name="Services"
        component={Services}
        options={({ navigation, route }) => ({
          headerLeft: () => (
            <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back-circle" size={30} color={COLORS.black} />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default ServicesNavigator;
