import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Settings } from '../screens';
import { COLORS } from '../themes';
const Stack = createNativeStackNavigator();

const SettingsNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primary },
        headerTitleStyle: { fontFamily: 'Inter-Bold', fontSize: 16 },
        headerTintColor: COLORS.white,
      }}>
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};
export default SettingsNavigator;
