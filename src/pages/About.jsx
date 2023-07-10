import { useContractRead,useContractWrite,usePrepareContractWrite,useWaitForTransaction } from "wagmi"


// import { useState,useEffect } from "react"

import contractAbi from '../contracts/abi.json'

// import {useContractRead, useContract} from '@thirdweb-dev/react'

import { useState } from "react"
import ListAllProperty from "../components/contractcom/ListAllProperty"
import GetProperty from "../components/contractcom/GetProperty"
import UpdateProperty from "../components/contractcom/UpdateProperty"


const About = () => {


//   const datafetched = useContractRead({
//     address: '0x8BC9B1202624a062B20806155b61012C668B7709',
//     abi: contractAbi.abi,
//     functionName: 'getAllProperty',
//     enabled:false
//   })

  
  
//  console.log(datafetched)

//  if(datafetched.isLoading)return (<div>Loading..</div>)
//  else if(datafetched.isSuccess)return(
//   datafetched.data.map((val) => {
//     <img src={val.image} alt="" />
//   })
//  )

const [fetchall,setFetchall] = useState(false)
const [fetchone,setFetchone] = useState(false)

// {fetchall && <ListAllProperty />}

  return (
    <>
    {fetchall && <ListAllProperty />}
    {fetchone && <GetProperty />}
      <button onClick={() => {
        setFetchall(true)
      }} >List Properties</button>

      <button onClick={() => {
        setFetchone(true)
      }} >Fetch one</button>

      {/* <UpdateProperty /> */}

    </>
  )
}

export default About