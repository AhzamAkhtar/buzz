import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useBuzz } from '../hook/buzz'
import {WalletMultiButton} from '@solana/wallet-adapter-react-ui'
const Home = () => {
  const {
    initialized,
    name,
    age,
    gender,
    profileUrl,
    nameHandler,
    ageHandler,
    genderHandler,
    profileUrlHandler,
    initializeUser,
    allUsers
  } = useBuzz()

  return(
    <>

    {initializeUser ? (
      <>
        <h1>Initialized</h1>
      </>
    ) : (
      <>
      <h1>Not Initialized</h1>
      </>
    )}
    <WalletMultiButton/>
    </>
  )
}

export default Home
