import styled from 'styled-components/native'
import { normalize } from '../../theme/normalize'

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.red_400};
`
export const Button = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.green_100};
  height: ${normalize(40)}px;
  width: ${normalize(100)}px;
  margin-top: ${normalize(20)}px;
  align-items: center;
  justify-content: center;
`
