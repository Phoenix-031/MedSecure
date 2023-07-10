import React, { useEffect } from 'react'

import { usePrepareContractWrite, useContractWrite, useWaitForTransaction } from 'wagmi'

import { useState } from 'react'

import contractAbi from '../../contracts/abi.json'


const AddDoctor = () => {

  const [doctorname,setDoctorname] = useState('')
  const [practising,setPractising] = useState('')
  const [wallet,setWallet] = useState('')
  const [fees,setFees] = useState('')


  const [chngload,setChngload] = useState(false)

  const { config } = usePrepareContractWrite({
    address: '0xec94969Bbb07201d88d02FC25eD4a3c2E49b02bb',
    abi: contractAbi.abi,
    functionName: 'addDoctor',
    args:[doctorname,practising,wallet,fees]
  })
  const { data, isLoading, isSuccess, write } = useContractWrite(config)

  const transacwait = useWaitForTransaction({
    hash: data?.hash,
    onSuccess: () => {
    setChngload(false)
    alert('Doctor added successfully')
    }
    
  })

  // if(transacwait.isSuccess){
  //   console.log("done")
  //   setChngload(false)
  //   alert('Doctor added successfully')
  // }
  
  
  return (
    <div className='bg-bg-primary w-full h-[100vh] flex justify-center items-center'>
      <div className='flex justify-center items-center py-2 px-5 rounded-lg border-2 border-border-primary bg-bg-secondary w-2/5 h-[80%] flex-col gap-3'>
        <label className='flex w-full justify-center items-center flex-col text-white font-serif'>
          Doctor Name:
          <input className='w-[60%] rounded-md py-1 px-2 text-black outline-none' type="text" value={doctorname} onChange={(e) => setDoctorname(e.target.value)}/>
        </label>

        <label className='flex w-full justify-center items-center flex-col text-white font-serif'>
          Practising:
          <input className='w-[60%] rounded-md py-1 px-2 text-black outline-none' type="text" value={practising} onChange={(e) => setPractising(e.target.value)}/>
        </label>

        <label className='flex w-full justify-center items-center flex-col text-white font-serif'>
          Wallet:
          <input className='w-[60%] rounded-md py-1 px-2 text-black outline-none' type="text" value={wallet} onChange={(e) => setWallet(e.target.value)}/>
        </label>

        <label className='flex w-full justify-center items-center flex-col text-white font-serif'>
          Doctor Fees:
          <input className='w-[60%] rounded-md py-1 px-2 text-black outline-none' type="text" value={fees} onChange={(e) => setFees(e.target.value)}/>
        </label>

        {
          chngload ? 'Processing...' : <button disabled={!write} onClick={() =>{
             write?.()
             setChngload(!chngload)
          }} className='py-2 px-6 text-md text-white font-serif border-2 border-border-primary rounded-lg my-3 mr-8 hover:bg-bg-secondary'>Submit</button>
        }
      </div>

    </div>
  )
}

export default AddDoctor