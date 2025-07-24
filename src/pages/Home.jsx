import React from 'react'
import { Banner } from '../components/Banner'
import Delivery from '../components/Delivery'
import Reco from '../components/Reco'
import { Collection } from '../components/Collection'
import { FooterNav } from '../components/FooterNav'
import { Credit } from '../components/Credit'

export const Home = () => {
  return (
    <>
    <Banner/>
    <Delivery/>
    <Reco/>
    <Collection/>
    <FooterNav/>
    <Credit/>
    </>
  )
}
