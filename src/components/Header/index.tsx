import React, { useState } from 'react'
import * as S from './styles'
import LogoHeader from '../../assets/logoHeader.svg'
import { SearchCode } from '../SearchCode'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <S.Container>
      <S.Button onPress={() => setIsMenuOpen(!isMenuOpen)}>
        <LogoHeader />
      </S.Button>
      {isMenuOpen && (
        <S.Menu>
          <SearchCode />
        </S.Menu>
      )}
    </S.Container>
  )
}
