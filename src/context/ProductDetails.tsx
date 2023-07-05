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

export interface IPinItem {
  idElo: number
  nome: string
  latitude: number
  longitude: number
  midias: string[]
  descricao?: string
}

interface ProductContextData {
  product: any[]
  details: IDetails
  origin: IItemDestiny[]
  distributor: IItemDestiny[]
  listPinItem: IPinItem[]
  handleSearch: (search: string, isHome?: boolean) => void
}

const ProductContext = createContext({} as ProductContextData)

function ProductProvider({ children }: ProductProps) {
  const navigation = useNavigation()
  const [product, setProduct] = useState([] as any[])
  const [details, setDetails] = useState({} as IDetails)
  const [origin, setOrigin] = useState([] as IItemDestiny[])
  const [distributor, setDistributor] = useState([] as IItemDestiny[])
  const [listPinItem, setListPinItem] = useState([] as IPinItem[])

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
    const originResponse = []
    const distributorResponse = []
    const pinItem = []

    await getTracking({ trackingCode: search })
      .then(async response => {
        const responseDetail = response.find(
          item => item.codigoRastreamento === search,
        )

        response.forEach(element => {
          element.elos.forEach(item => {
            if (item.categoria === 0) {
              originResponse.push(item)
            } else {
              distributorResponse.push(item)
            }
            pinItem.push(item)
          })
        })

        setOrigin(removeDuplication(originResponse))
        setDistributor(removeDuplication(distributorResponse))
        setListPinItem(removeDuplication(pinItem))

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
        listPinItem,
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
