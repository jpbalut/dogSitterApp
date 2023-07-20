import { FlatList, SafeAreaView, View } from 'react-native';

import { styles } from './styles';
import { CategoryItem } from '../../components';
import ORIENTATION from '../../constants/data/orientation';
import SERVICECATEGORIES from '../../constants/data/servicescategories.json';
import useOrientation from '../../hooks/useOrientation';

function ServicesCategories({ navigation }) {
  const orientation = useOrientation();
  const onSelectCategory = ({ categoryId, color }) => {
    navigation.navigate('Services', { categoryId, color });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={SERVICECATEGORIES}
          style={styles.categoryContainer}
          renderItem={({ item }) => (
            <CategoryItem
              {...item}
              onSelectCategory={() =>
                onSelectCategory({ categoryId: item.id, color: item.backgroundColor })
              }
              style={orientation === 'LANDSCAPE' ? styles.categoryItemLandscape : {}}
            />
          )}
          contentContainerStyle={styles.listCategory}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

export default ServicesCategories;
