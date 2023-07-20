import { StyleSheet } from 'react-native';

import { COLORS } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
  },
  goBack: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  goBackText: {
    fontSize: 16,
    color: COLORS.text,
    fontWeight: 'bold',
  },
  productImage: {
    height: 200,
    width: 200,
  },
  productTitle: {},
  productTitleText: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
  },
  productPrice: {
    marginTop: 20,
  },
  productPriceText: {
    fontFamily: 'Inter-Bold',
    fontSize: 15,
  },
  productDescription: {},
  productDescriptionText: {
    fontFamily: 'Inter-Light',
  },
  productTag: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    height: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  tagContainer: {
    marginTop: 20,
  },
});
