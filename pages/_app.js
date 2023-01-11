import '../styles/globals.css'
import { WalletConnectProvider } from "../components/WalletConnectProvider";
import "../styles/globals.css";
import '@solana/wallet-adapter-react-ui/styles.css'

function MyApp({ Component, pageProps }) {
  return (
    <WalletConnectProvider>
    <Component {...pageProps} />
    </WalletConnectProvider>
  

  )
}

export default MyApp
