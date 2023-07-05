import React from 'react'
import * as S from './styles'
import { RobotoTextProps } from './types'
import theme from '../../theme'

export function RobotoText({
  value,
  children,
  font = 'regular',
  align = 'center',
  color = theme.colors.gray_700,
  size,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
}: RobotoTextProps) {
  return (
    <S.Text
      font={font}
      align={align}
      color={color}
      size={size}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
    >
      {value || children}
    </S.Text>
  )
}
