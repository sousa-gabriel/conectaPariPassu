import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

import { Path } from '../../screens/Path'
import { Details } from '../../screens/Details'
import { Destiny } from '../../screens/Destiny'

import { scrollOptions } from './utils'
import theme from '../../theme'
import { normalize } from '../../theme/normalize'

const { Navigator, Screen } = createBottomTabNavigator()

export const TabBarRoutes = () => {
  return (
    <Navigator screenOptions={scrollOptions}>
      <Screen
        name="Detalhes"
        component={Details}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="th-list"
              size={normalize(25)}
              color={focused ? theme.colors.blue_100 : theme.colors.gray_100}
            />
          ),
        }}
      />
      <Screen
        name="Trajeto"
        component={Path}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="truck-delivery"
              size={normalize(30)}
              color={focused ? theme.colors.blue_100 : theme.colors.gray_100}
            />
          ),
        }}
      />
      <Screen
        name="Destino"
        component={Destiny}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="office-building-marker"
              size={normalize(30)}
              color={focused ? theme.colors.blue_100 : theme.colors.gray_100}
            />
          ),
        }}
      />
    </Navigator>
  )
}
