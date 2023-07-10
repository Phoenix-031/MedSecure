import { useContractRead,useContractWrite,usePrepareContractWrite,useWaitForTransaction } from "wagmi"


// import { useState,useEffect } from "react"

import contractAbi from '../../contracts/abi.json'

import useStore from '../../store'
import { useEffect } from "react"

import FeatherIcon from 'feather-icons-react';

const GetAllDoctors = () => {

  const datafetched = useContractRead({
    address: '0xec94969Bbb07201d88d02FC25eD4a3c2E49b02bb',
    abi: contractAbi.abi,
    functionName: 'getAllDoctor',
  })

  // console.log(datafetched)

  return(
    <div>
      {
        datafetched.isLoading ? <div>Loading...</div> : 
        <div className=" bg-bg-primary w-full h-[100vh] flex flex-wrap gap-3 pt-24 py-3 items-center px-2 overflow-auto" >
          {
          datafetched.data.map((item, index) => {
            if(item.name !== ''){
            return (
              <div className="border-2 border-border-primary bg-bg-secondary rounded-lg py-2 px-1 w-1/4 h-[200px] flex justify-center items-center flex-col" key={index}>
                <p className="mt-2 text-white font-serif font-semibold">{item.name}</p>
                <p className="mt-2 text-white font-serif font-semibold">{item.category}</p>
                <p className="mt-2 text-white font-serif font-semibold">{item.fees}</p>
                <p className="mt-2 text-white font-serif font-semibold">{item.uniqueId}</p>
              </div>
            )
            }
          })
          }
          </div>
      }
    </div>
  )

}

export default GetAllDoctors