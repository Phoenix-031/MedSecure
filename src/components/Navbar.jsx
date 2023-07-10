import React from 'react'

import { useAccount, useConnect, useEnsName } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

import { useNavigate } from 'react-router-dom'


import { NavLink } from 'react-router-dom'
import useStore from '../store'


const Navbar = () => {

  const navigate = useNavigate()

  const {walletaddress, setWalletaddress} = useStore((state) => ({
    walletaddress:state.walletaddress,
    setWalletaddress: state.setWalletaddress
  }))

  const { address, isConnected } = useAccount()
  const { data: ensName } = useEnsName({ address })
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
 
  // if (isConnected) return <div>Connected to {ensName ?? address}</div>
  
  return (
    <>
      <div className='w-[100vw] bg-bg-primary flex justify-between items-center gap-5 fixed py-3'>
        <NavLink to='/' className='text-white font-serif text-lg mx-2'>Med Secure</NavLink>
        <div>
          {/* <button className='py-4 px-6 text-lg text-white font-serif border-2 border-border-primary rounded-lg my-3 mr-8 hover:bg-bg-secondary'
            onClick={() => connect()}
          >Connect Wallet</button> */}

          {
            walletaddress !== '' ? (
              <button className='py-2 px-6 text-md text-white font-serif border-2 border-border-primary rounded-lg my-3 mr-8 hover:bg-bg-secondary' onClick={() => {
                navigate('/')
                setWalletaddress('')
              }}>Logout</button>
            ) : (<button className='py-2 px-6 text-md text-white font-serif border-2 border-border-primary rounded-lg my-3 mr-8 hover:bg-bg-secondary' 
            onClick={() => navigate('/login')}
            >Login</button>)
          }
          {/* <button>Register</button> */}
        </div>
      </div>
    </>
  )
}

export default Navbar