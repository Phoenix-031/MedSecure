import React, { useState } from 'react'

import { useAccount, useConnect, useEnsName } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

import {useNavigate} from 'react-router-dom'

import useStore from '../store'

const Login = () => {

  const {walletaddress,setWalletaddress} = useStore((state) => ({
    walletaddress:state.walletaddress,
    setWalletaddress: state.setWalletaddress
  }))

  const navigate = useNavigate()

  const [doctor,setDoctor] = useState(false)
  const [patient,setPatient] = useState(false)
  const [admin,setAdmin] = useState(false)
  
  const { address, isConnected } = useAccount()

    if(isConnected){
      console.log(address)
      setWalletaddress(address)
      if(patient)
        navigate('/patienthome')
      else if(doctor)
        navigate('/doctorhome')
      else
        navigate('/admin')
    }
  // const { data: ensName } = useEnsName({ address })
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  
  
  return (
    <>
        <div className='w-[100vw] h-[100vh] bg-bg-primary flex flex-col gap-3 justify-center items-center'>
            <div className='flex justify-center items-baseline text-white font-serif flex-col gap-2'>
                {/* I am a patient */}
                <button className='py-4 px-6 text-xl text-white bg-bg-secondary border-2 border-border-primary rounded-xl' onClick={() =>{
                  connect()
                  setAdmin(true)
                }}>I am an admin</button>
            </div>
            <div className='flex justify-center items-baseline text-white font-serif flex-col gap-2'>
                {/* I am a doctor */}
                <button className='py-4 px-6 text-xl text-white bg-bg-secondary border-2 border-border-primary rounded-xl' onClick={() =>{
                  connect()
                  setDoctor(true)
                }}>I am a doctor</button>
            </div>
            <div className='flex justify-center items-baseline text-white font-serif flex-col gap-2'>
                {/* I am a patient */}
                <button className='py-4 px-6 text-xl text-white bg-bg-secondary border-2 border-border-primary rounded-xl' onClick={() =>{
                  connect()
                  setPatient(true)
                }}>I am a patient</button>
            </div>
        </div>
    </>
  )
}

export default Login