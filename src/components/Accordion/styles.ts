import styled from 'styled-components/native'
import { normalize } from '../../theme/normalize'

export const Container = styled.TouchableOpacity`
  width: 100%;
  padding-bottom: ${normalize(10)}px;
`

export const Content = styled.View`
  height: ${normalize(50)}px;
  width: 100%;
  flex-direction: row;
  align-items: center;
`

export const ContainerIcon = styled.View`
  position: absolute;
  right: ${normalize(20)}px;
`
