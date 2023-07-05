import React, { ReactNode } from 'react'
import { ProductProvider } from './ProductDetails'

interface Props {
  children: ReactNode
}

export function Providers({ children }: Props) {
  return <ProductProvider>{children}</ProductProvider>
}
