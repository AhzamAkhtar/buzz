import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useBuzz } from '../Connector/buzz'
import {WalletMultiButton} from '@solana/wallet-adapter-react-ui'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
const Home = () => {

  return(
    <>
  
    <Hero/>
    </>
  )
}

export default Home
