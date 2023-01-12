import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useBuzz } from '../hook/buzz'
import {WalletMultiButton} from '@solana/wallet-adapter-react-ui'
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

    {initialized ? (
      <>
        {/* <h1>Initialized</h1> */}
        

        {/* {allUsers.map((item)=>{
          return (
            <>
            <div>
            <h4>{item.account.name}</h4>
              <h4>{item.account.age}</h4>
              <h4>{item.account.gender}</h4>
              <h4>{item.account.profileUrl}</h4>
              <button onClick={()=>addFriendfun(
                item.account.name,
                item.account.age,
                item.account.gender,
                item.account.profileUrl,
                "testing123"
              )}>Add friend</button>
            </div>
              
            </>
          )
        })} */}

      </>
    ) : (
      <>
      {/* <input placeholder='Enter your name' value={name} onChange={nameHandler} type="text"></input>
      <input placeholder='Enter the age' value={age} onChange={ageHandler} type="text"></input>
      <input placeholder='Enter the gender' value={gender} onChange={genderHandler} type="text"></input>
      <input placeholder='Enter the profile url' value={profileUrl} onChange={profileUrlHandler} type="text"></input>
      <button onClick={() => initializeUser()} disabled={transactionPending} >INITIALIZED</button> */}
      {/* <h1>Not Initialized</h1> */}
      </>
    )}
    {/* <WalletMultiButton/> */}
    </>
  )
}

export default Home
