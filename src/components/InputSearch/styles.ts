import styled from 'styled-components/native'
import { IInputStyleProps } from './types'
import { referenceColorInput } from './utils'
import { normalize } from '../../theme/normalize'

export const InputContainer = styled.View<IInputStyleProps>`
  flex-direction: row;
  padding: ${normalize(10)}px;
  height: ${normalize(50)}px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  align-items: center;
  border-width: 1px;
  border-color: ${({ isFocused }) => referenceColorInput(isFocused)};
`
export const Content = styled.View`
  width: 90%;
  height: 100%;
  flex-direction: row;
  align-items: center;
`

export const TextStyleInput = styled.TextInput<IInputStyleProps>`
  width: 100%;
  height: 100%;
  padding: 0 ${normalize(10)}px;
  font-size: ${normalize(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.gray_700};
`

export const ResetSearch = styled.TouchableOpacity`
  width: ${normalize(30)}px;
`
