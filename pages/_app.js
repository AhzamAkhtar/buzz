import '../styles/globals.css'
import { WalletConnectProvider } from "../components/WalletConnectProvider";
import "../styles/globals.css";
import '@solana/wallet-adapter-react-ui/styles.css'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
function MyApp({ Component, pageProps }) {
  return (
    <WalletConnectProvider>
    <Navbar/>
    <Hero/>
    <Component {...pageProps} />
    </WalletConnectProvider>
  

  )
}

export default MyApp
