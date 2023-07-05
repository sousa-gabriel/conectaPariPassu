import { getBottomSpace } from 'react-native-iphone-x-helper'
import styled from 'styled-components/native'
import { normalize } from '../../theme/normalize'

export const Container = styled.View`
  width: 100%;
  margin-top: ${getBottomSpace() + normalize(10)}px;
  margin-bottom: ${normalize(20)}px;
`

export const Button = styled.TouchableOpacity``

export const Menu = styled.View`
  width: 100%;
  padding: ${normalize(20)}px;
  height: ${normalize(150)}px;
  right: ${normalize(20)}px;
  background-color: ${({ theme }) => theme.colors.white};
`
