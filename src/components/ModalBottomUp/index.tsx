import React from 'react'
import * as S from './styles'
import type { ModalBottomUpProps } from './types'
import { RobotoText } from '../RobotoText'
import theme from '../../theme'

export function ModalBottomUp({
  handleClosed,
  isVisible,
  title,
  children,
  heightPercentage,
  colorTitle = theme.colors.gray_500,
}: ModalBottomUpProps) {
  return (
    <S.Container
      isVisible={isVisible}
      coverScreen={true}
      hasBackdrop={true}
      onBackdropPress={handleClosed}
      onSwipeComplete={handleClosed}
    >
      <S.Content heightPercentage={heightPercentage}>
        <RobotoText
          value={title}
          size={'12small'}
          font="bold"
          color={colorTitle ?? theme.colors.green_100}
          align="center"
        />
        {children}
      </S.Content>
    </S.Container>
  )
}
