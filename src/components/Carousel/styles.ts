import styled from 'styled-components/native'
import { normalize } from '../../theme/normalize'

export const Container = styled.View`
  margin-top: ${normalize(20)}px;
`

export const ProductPhoto = styled.Image`
  width: ${normalize(200)}px;
  height: ${normalize(200)}px;
  margin-right: ${normalize(20)}px;
  border-radius: ${normalize(10)}px;
`
