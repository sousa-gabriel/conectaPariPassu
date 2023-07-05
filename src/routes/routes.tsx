import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../screens/Home'
import { TabBarRoutes } from '../components'

const Stack = createNativeStackNavigator()

export const RoutesApp = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Home'}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="DashBoard" component={TabBarRoutes} />
    </Stack.Navigator>
  )
}
