import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Training } from '../screens';
import { COLORS } from '../themes';
const Stack = createNativeStackNavigator();

const TrainingNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Training"
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primary },
        headerTitleStyle: { fontFamily: 'Inter-Bold', fontSize: 16 },
        headerTintColor: COLORS.white,
      }}>
      <Stack.Screen name="Training" component={Training} />
    </Stack.Navigator>
  );
};
export default TrainingNavigator;
