import { useFonts } from 'expo-font';
import { ActivityIndicator, SafeAreaView, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';

import RootNavigator from './navigations';
import { store } from './store';
import { COLORS } from './themes';

export default function App() {
  const [loaded] = useFonts({
    'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
    'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
    'Inter-Light': require('../assets/fonts/Inter-Light.ttf'),
    'Inter-Medium': require('../assets/fonts/Inter-Medium.ttf'),
  });

  if (!loaded) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator color={COLORS.primary} size="large" />
      </View>
    );
  }
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <RootNavigator />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "black",
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
