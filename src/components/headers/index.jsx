import { View, Text, useWindowDimensions } from 'react-native';

import { styles } from './styles';

const Header = ({ title, style }) => {
  const { width } = useWindowDimensions();

  const isTablet = width > 650;

  return (
    <View style={isTablet ? [styles.containerTablet, style] : [styles.container, style]}>
      <Text style={isTablet ? styles.titleTablet : styles.title}>{title}</Text>
    </View>
  );
};

export default Header;
