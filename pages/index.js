import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useBuzz } from '../hook/buzz'
import {WalletMultiButton} from '@solana/wallet-adapter-react-ui'
import Hero from '../components/Hero'
const Home = () => {
  const {
    initialized,
    transactionPending,
    name,
    age,
    gender,
    profileUrl,
    nameHandler,
    ageHandler,
    genderHandler,
    profileUrlHandler,
    initializeUser,
    addFriendfun,
    allUsers
  } = useBuzz()

  return(
    <>
    <Hero/>
    </>
  )
}

export default Home
