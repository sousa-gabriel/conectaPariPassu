import React, { useState } from 'react'
import { IInputProps } from './types'
import * as S from './styles'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { referenceColorInput } from './utils'
import { View } from 'react-native'
import theme from '../../theme'

export const InputSearch = ({
  placeholder,
  value,
  onChangeText,
}: IInputProps) => {
  const [isFocus, setIsFocus] = useState(false)
  const haveValue = value !== ''

  function handleInputFocus() {
    setIsFocus(true)
  }

  function handleInputBlur() {
    setIsFocus(false)
  }

  return (
    <View>
      <S.InputContainer haveIcon={true} isFocused={isFocus}>
        <S.Content>
          <S.TextStyleInput
            value={value}
            onChangeText={onChangeText}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            placeholderTextColor={theme.colors.gray_500}
            placeholder={placeholder}
          />
        </S.Content>
        <S.ResetSearch onPress={() => onChangeText('')}>
          <MaterialCommunityIcons
            name={haveValue ? 'close' : 'magnify'}
            size={25}
            color={
              haveValue ? theme.colors.gray_100 : referenceColorInput(isFocus)
            }
          />
        </S.ResetSearch>
      </S.InputContainer>
    </View>
  )
}
