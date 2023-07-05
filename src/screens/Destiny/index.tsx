import React from 'react'
import * as S from './styles'
import theme from '../../theme'
import { Accordion, Header, ItemDestiny } from '../../components'
import { useProduct } from '../../context/ProductDetails'

export function Destiny() {
  const { origin, distributor } = useProduct()
  return (
    <S.Container>
      <Header />
      <Accordion label="ORIGEM DECLARADA" color={theme.colors.green_100}>
        {origin.map((item, index) => (
          <ItemDestiny
            key={`${item.idElo}`}
            NF={item.notasFiscaisCompra}
            city={item.municipio}
            country={item.pais}
            state={item.unidadeFederativa}
            inscriptionRural={item.inscricaoRural}
            inscriptionState={item.inscricaoEstadual}
            nameCompany={item.nome}
            positionNumber={index + 1}
            hasDistribution={false}
            images={item.midias}
            description={item.descricao}
          />
        ))}
      </Accordion>
      <Accordion label="DISTRIBUIDOR" color={theme.colors.blue_100}>
        {distributor.map((item, index) => (
          <ItemDestiny
            key={`${item.idElo}`}
            NF={item.notasFiscaisCompra}
            city={item.municipio}
            country={item.pais}
            state={item.unidadeFederativa}
            inscriptionRural={item.inscricaoRural}
            inscriptionState={item.inscricaoEstadual}
            nameCompany={item.nome}
            positionNumber={index + 1}
            hasDistribution={true}
            images={item.midias}
            description={item.descricao}
          />
        ))}
      </Accordion>
    </S.Container>
  )
}
