import React from 'react'
import Logo from '../../assets/logo.svg'
import LogoParipassu from '../../assets/logoParipassu.svg'
import * as S from './styles'
import { RobotoText } from '../../components'
import { home } from '../../mock/data'
import { SearchCode } from '../../components/SearchCode'

export function Home() {
  return (
    <S.Container>
      <Logo />
      <S.Content>
        <RobotoText
          align="center"
          font="regular"
          size="24big"
          value={home.title}
          marginBottom={60}
        />
        <SearchCode isHome />
      </S.Content>
      <LogoParipassu />
    </S.Container>
  )
}
