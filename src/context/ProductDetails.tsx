import React, { ReactNode, createContext, useContext, useState } from 'react'
import { getTracking } from '../services/network/getTracking'
import { useNavigation } from '@react-navigation/native'
import Toast from 'react-native-root-toast'
import theme from '../theme'

interface ProductProps {
  children: ReactNode
}
interface IDetails {
  productName: string
  productPhoto: string
  productCode: string
  productDescription: string
}

interface IItemDestiny {
  idElo: number
  notasFiscaisCompra?: (string | null)[]
  municipio: string
  pais: string
  unidadeFederativa: string
  inscricaoRural?: string
  inscricaoEstadual?: string
  nome: string
  midias: string[]
  descricao?: string
}

interface IDestiny {
  origin: IItemDestiny
  distributor: IItemDestiny
}

interface ProductContextData {
  product: any[]
  details: IDetails
  origin: IItemDestiny[]
  distributor: IItemDestiny[]
  handleSearch: (search: string, isHome?: boolean) => void
}

const ProductContext = createContext({} as ProductContextData)

function ProductProvider({ children }: ProductProps) {
  const [product, setProduct] = useState([] as any[])
  const [details, setDetails] = useState({} as IDetails)
  const [destiny, setDestiny] = useState({} as IDestiny)
  const [origin, setOrigin] = useState([] as IItemDestiny[])
  const [distributor, setDistributor] = useState([] as IItemDestiny[])
  const navigation = useNavigation()

  function removeDuplication(arr) {
    const company = new Map()

    arr.forEach(item => {
      if (!company.has(item.nome)) {
        company.set(item.nome, item)
      }
    })

    const filtered = Array.from(company.values())
    return filtered
  }

  async function handleSearch(search: string, isHome?: boolean) {
    await getTracking({ trackingCode: search })
      .then(async response => {
        const responseDetail = response.find(
          item => item.codigoRastreamento === search,
        )
        const originResponse = []
        const distributorResponse = []

        response.forEach(element => {
          element.elos.forEach(item => {
            if (item.categoria === 0) {
              originResponse.push(item)
            } else {
              distributorResponse.push(item)
            }
          })
        })

        setOrigin(removeDuplication(originResponse))
        setDistributor(removeDuplication(distributorResponse))

        const detailResponse = {
          productName: responseDetail.produtos[0].nome,
          productPhoto: responseDetail.produtos[0].urlFoto,
          productCode: responseDetail.codigoRastreamento,
          productDescription: responseDetail.produtos[0].descricao,
        }
        setDetails(detailResponse)
        setProduct(response)
        isHome && navigation.navigate('DashBoard')
      })
      .catch(error => {
        console.log(error)
        Toast.show(`Erro ao buscar os dados, verifique o código do produto`, {
          duration: Toast.durations.SHORT,
          position: Toast.positions.CENTER,
          backgroundColor: theme.colors.red_400,
          opacity: 1,
          textStyle: { padding: 20 },
          textColor: theme.colors.white,
          shadow: true,
          animation: true,
          hideOnPress: true,
        })
      })
  }

  return (
    <ProductContext.Provider
      value={{
        product,
        details,
        origin,
        distributor,
        handleSearch,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

function useProduct() {
  const context = useContext(ProductContext)
  return context
}

export { ProductProvider, useProduct }
