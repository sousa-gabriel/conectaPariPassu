import React, { useState } from 'react'
import * as S from './styles'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { AccordionProps } from './types'
import { RobotoText } from '../RobotoText'
import theme from '../../theme'
import { normalize } from '../../theme/normalize'

export const Accordion = ({ label, children, color }: AccordionProps) => {
  const [childrenVisible, setChildrenVisible] = useState(true)

  const handleChildrenVisible = () => {
    setChildrenVisible(!childrenVisible)
  }

  return (
    <S.Container onPress={handleChildrenVisible}>
      <S.Content>
        <RobotoText
          font="regular"
          align="center"
          color={color ?? theme.colors.gray_500}
          value={label}
          size="12small"
          marginLeft={normalize(10)}
        />
        <S.ContainerIcon>
          <MaterialCommunityIcons
            name={childrenVisible ? 'chevron-down' : 'chevron-right'}
            size={normalize(25)}
            color={color ?? theme.colors.gray_500}
          />
        </S.ContainerIcon>
      </S.Content>
      {childrenVisible && children}
    </S.Container>
  )
}
