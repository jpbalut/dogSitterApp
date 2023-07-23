import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CartNavigator from './cart';
import ServicesNavigator from './services';
import SettingsNavigator from './settings';
import ShopNavigator from './shop';
import TrainingNavigator from './training';
import { COLORS } from '../themes';
const BottomTab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="ShopTab"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: { fontFamily: 'Inter-Regular', fontSize: 10 },
        tabBarStyle: {
          backgroundColor: COLORS.white,
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.secondary,
        tabBarIconStyle: { fontSize: 22 },
      }}>
      <BottomTab.Screen
        name="ShopTab"
        component={ShopNavigator}
        options={{
          tabBarLabel: 'Shop',
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} size={30} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="CartTab"
        component={CartNavigator}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name={focused ? 'cart' : 'cart-outline'} size={20} color={color} />
          ),
          tabBarBadge: 2,
          tabBarBadgeStyle: {
            backgroundColor: COLORS.secondary,
            color: COLORS.white,
            fontFamily: 'Inter-Regular',
            fontSize: 11,
          },
        }}
      />
      <BottomTab.Screen
        name="ServicesTab"
        component={ServicesNavigator}
        options={{
          tabBarLabel: 'Services',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'calendar' : 'calendar-outline'} size={size} color={color} />
          ),
          tabBarBadge: 2,
          tabBarBadgeStyle: {
            backgroundColor: COLORS.black,
            color: COLORS.white,
            fontFamily: 'Inter-Regular',
            fontSize: 11,
          },
        }}
      />
      <BottomTab.Screen
        name="TrainingTab"
        component={TrainingNavigator}
        options={{
          tabBarLabel: 'Training',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'barbell' : 'barbell-outline'} size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="SettingsTab"
        component={SettingsNavigator}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'settings' : 'settings-outline'} size={size} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default TabsNavigator;
