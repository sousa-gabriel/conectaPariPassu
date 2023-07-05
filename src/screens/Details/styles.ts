import styled from 'styled-components/native'
import { normalize } from '../../theme/normalize'

export const Container = styled.View`
  flex: 1;
  padding: 0px ${normalize(20)}px;
  background-color: ${({ theme }) => theme.colors.white};
  align-items: flex-start;
  justify-content: flex-start;
`

export const ContentTitle = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`

export const ProductPhoto = styled.Image`
  width: 100%;
  height: ${normalize(200)}px;
`
export const ScrollDetails = styled.ScrollView`
  margin-bottom: ${normalize(20)}px;
`
