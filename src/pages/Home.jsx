import React from 'react'
import { Banner } from '../components/Banner'
import Service from '../components/Service'
import Reco from '../components/Reco'
import { Collection } from '../components/Collection'
import { FooterNav } from '../components/FooterNav'
import { Credit } from '../components/Credit'

export const Home = () => {
  return (
    <>
    <Banner/>
    <Service/>
    <Reco/>
    <Collection/>
    <FooterNav/>
    <Credit/>
    </>
  )
}
