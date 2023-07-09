
import { metamaskWallet, useAddress, useConnect } from "@thirdweb-dev/react";


function Home() {

const metamaskConfig = metamaskWallet();

  const connect = useConnect()

  const handleconnect = async() => {
    const wallet = await connect(metamaskConfig)

    console.log(wallet)
  }
  
  // const address = useAddress()

  // console.log(address)
  
  return <button onClick={handleconnect}>Connect Walle</button>
}

export default Home