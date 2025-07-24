import React from 'react'
import { ProductImg } from '../components/ProductImg'
import { ProductText } from '../components/ProductText'
import Reco from '../components/Reco'
import { FooterNav } from '../components/FooterNav'
import { Credit } from '../components/Credit'

export const ProductPage = () => {
  return (
    <>
    <ProductImg/>
    <ProductText/>
    <Reco/>
    <FooterNav/>
    <Credit/>
    </>
  )
}
