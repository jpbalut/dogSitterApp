import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, Text, View, Image } from 'react-native/';

import { styles } from './styles';
import { COLORS } from '../../../themes';

const CartItem = ({ categoryId, name, price, image, currency, quantity, stock, ...props }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>{`${currency.code} ${price}`}</Text>
        <Text style={styles.qty}>{quantity}</Text>
        <Text style={styles.stock}>{stock}</Text>
        <TouchableOpacity style={styles.increaseButton} onPress={() => {}}>
          <Text style={styles.increaseButtonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.decreaseButton} onPress={() => {}}>
          <Text style={styles.decreaseButtonText}>-</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="trash" size={22} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;
