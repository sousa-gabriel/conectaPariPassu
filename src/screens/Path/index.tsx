import React from 'react'
import * as S from './styles'
import { Header, RobotoText } from '../../components'
import theme from '../../theme'
import { product } from '../../mock/data'

export function Path() {
  return (
    <S.Container>
      <Header />
      <RobotoText
        align="center"
        font="bold"
        size="20large"
        value={product.productPath}
        color={theme.colors.green_100}
      />
    </S.Container>
  )
}
