import React, { createRef } from 'react'
import { NavigationContainerRef } from '@react-navigation/native'

import { ParamList } from './types'
import { RoutesApp } from './routes'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends ParamList {}
  }
}

export const navigationRef = createRef<NavigationContainerRef<ParamList>>()

const Routes = () => {
  return <RoutesApp />
}

export default Routes
