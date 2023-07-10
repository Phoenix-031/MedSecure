
// import { metamaskWallet, useAddress, useConnect } from "@thirdweb-dev/react";

import { useAccount, useConnect, useEnsName } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

import { useNavigate, NavLink } from "react-router-dom"


import useStore from '../store'

function Home() {

  const {setWalletaddress,walletaddress} = useStore((state) =>({
    setWalletaddress:state.setWalletaddress,
    walletaddress:state.walletaddress,
  }))


  
  const { address, isConnected } = useAccount()
  // console.log(address)
  // console.log(walletaddress)

  // if(address)
    // setWalletaddress(address)

    if(isConnected){
      console.log(address)
      // setWalletaddress(address)
    }
  const { data: ensName } = useEnsName({ address })
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })

  return (
    <div className='overflow-x-hidden'>
      <button onClick={() => connect()}>Connect Wallet</button>
      <div className='flex flex-row justify-center items-center gap-2 w-[100vw] h-[100vh] bg-bg-primary'>
        <NavLink className='bg-bg-secondary text-white font-sans py-5 px-6 rounded-lg border-border-primary border-2'>Talk</NavLink>
        <NavLink className='bg-bg-secondary text-white font-sans py-5 px-6 rounded-lg border-border-primary border-2' to="/fundraiser">Fundraiser</NavLink>
        <NavLink className='bg-bg-secondary text-white font-sans py-5 px-6 rounded-lg border-border-primary border-2' to="/book-appointment">Book Appointment</NavLink>
      </div>
    </div>
  )
}

export default Home