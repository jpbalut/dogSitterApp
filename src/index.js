import { useFonts } from 'expo-font';
import { ActivityIndicator, SafeAreaView, StyleSheet, View } from 'react-native';

import RootNavigator from './navigations';
import { COLORS } from './themes';

// const categoryDefault = {
//   categoryId: null,
//   color: COLORS.primary,
// };

export default function App() {
  const [loaded] = useFonts({
    'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
    'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
    'Inter-Light': require('../assets/fonts/Inter-Light.ttf'),
    'Inter-Medium': require('../assets/fonts/Inter-Medium.ttf'),
  });
  // const [isCategorySelected, setIsCategorySelected] = useState(false);
  // const [selectedCategory, setSelectedCategory] = useState(categoryDefault);
  // const headerTitle = isCategorySelected ? "Products" : "Categories";

  // const onHandleSelectCategory = ({ categoryId, color }) => {
  //   setSelectedCategory({ categoryId, color });
  //   setIsCategorySelected(!isCategorySelected);
  // };

  // const onHandleNavigate = () => {
  //   setIsCategorySelected(!isCategorySelected);
  //   setSelectedCategory(categoryDefault);
  // };

  // <View style={styles.container}>
  //       <Header
  //         title={headerTitle}
  //         style={{ backgroundColor: selectedCategory ? selectedCategory.color : COLORS.primary }}
  //       />
  //       {isCategorySelected ? (
  //         <Products onHandleGoBack={onHandleNavigate} categorySelected={selectedCategory} />
  //       ) : (
  //         <Categories onSelectCategory={onHandleSelectCategory} />
  //       )}
  //     </View>
  if (!loaded) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator color={COLORS.primary} size="large" />
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <RootNavigator />
    </SafeAreaView>
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
