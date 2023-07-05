import React from 'react'
import {
  useFonts,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import Routes, { navigationRef } from './routes'
import { Providers } from './context'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  })

  if (fontsLoaded) {
    return (
      <ThemeProvider theme={theme}>
        <NavigationContainer ref={navigationRef}>
          <Providers>
            <Routes />
          </Providers>
        </NavigationContainer>
      </ThemeProvider>
    )
  }
  return null
}
