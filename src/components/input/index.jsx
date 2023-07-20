import { TextInput, View } from 'react-native';

import { styles } from './styles';

const Input = ({
  borderColor,
  onHandlerFocus,
  onHandlerBlur,
  onHandlerChangeText,
  text,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        style={[styles.input, { borderColor }]}
        onFocus={onHandlerFocus}
        onBlur={onHandlerBlur}
        onChangeText={onHandlerChangeText}
        autoCorrect={false}
        autoCapitalize="none"
        cursorColor={borderColor}
        placeholderTextColor={borderColor}
      />
    </View>
  );
};

export default Input;
