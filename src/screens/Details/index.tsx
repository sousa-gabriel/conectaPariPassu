import React from 'react'
import * as S from './styles'
import { Header, RobotoText } from '../../components'
import theme from '../../theme'
import { useProduct } from '../../context/ProductDetails'

export function Details() {
  const { details } = useProduct()
  return (
    <S.Container>
      <Header />
      <S.ContentTitle>
        <RobotoText
          align="center"
          font="bold"
          size="20large"
          value={details.productName}
          color={theme.colors.green_100}
        />
        <RobotoText
          align="center"
          font="regular"
          size="10xSmall"
          value={details.productCode}
          color={theme.colors.gray_500}
          marginBottom={20}
        />
      </S.ContentTitle>

      <S.ProductPhoto
        source={{ uri: details.productPhoto }}
        resizeMode="contain"
      />
      <S.ScrollDetails>
        <RobotoText
          marginTop={20}
          align="left"
          font="regular"
          size="14medium"
          value={details.productDescription}
          color={theme.colors.gray_500}
        />
      </S.ScrollDetails>
    </S.Container>
  )
}
