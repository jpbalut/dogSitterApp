import { StyleSheet } from 'react-native';

import { COLORS } from '../../../themes';

// import { COLORS } from "../../../themes";

export const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
    // width: '40%'
  },
  contentContainer: {
    width: '100%',
    height: 150,
    justifyContent: 'flex-end',
  },
  imageBackgroundTablet: {
    width: '100%',
    height: 250,
    justifyContent: 'flex-end',
  },
  icon: {
    alignSelf: 'flex-end',
    top: 30,
    right: 40,
  },
  categoryName: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: COLORS.white,
    padding: 20,
    textShadowColor: 'rgba(0,0,0,0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 6,
  },
  categoryNameTablet: {
    fontSize: 35,
    fontFamily: 'Inter-Bold',
    color: COLORS.white,
    padding: 20,
    textShadowColor: 'rgba(0,0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 6,
  },
});
