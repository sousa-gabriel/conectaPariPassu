import { Platform } from 'react-native'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import { normalize } from '../../theme/normalize'
import theme from '../../theme'

export const scrollOptions = {
  headerShown: false,
  tabBarActiveTintColor: theme.colors.blue_100,
  tabBarInactiveTintColor: theme.colors.gray_100,
  tabBarLabelStyle: {
    fontFamily: theme.fonts.medium,
    fontSize: normalize(10),
  },
  tabBarStyle: {
    paddingBottom:
      Platform.OS === 'android'
        ? normalize(5)
        : getBottomSpace() - normalize(10),
    height: Platform.OS === 'android' ? normalize(55) : normalize(75),
  },
}
