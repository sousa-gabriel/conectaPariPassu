import styled from 'styled-components/native'
import { normalize } from '../../theme/normalize'

export const Container = styled.TouchableOpacity`
  height: ${normalize(50)}px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${normalize(10)}px;
`
export const Content = styled.View`
  align-items: flex-start;
  margin-left: ${normalize(10)}px;
`
