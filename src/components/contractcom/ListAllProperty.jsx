import { useContractRead,useContractWrite,usePrepareContractWrite,useWaitForTransaction } from "wagmi"


// import { useState,useEffect } from "react"

import contractAbi from '../../contracts/abi.json'

const ListAllProperty = () => {

  const datafetched = useContractRead({
    address: '0x8BC9B1202624a062B20806155b61012C668B7709',
    abi: contractAbi.abi,
    functionName: 'getAllProperty',
  })

 console.log(datafetched)

 if(datafetched.isLoading)return (<div>Loading..</div>)
//  else if(datafetched.isSuccess)return(
//   datafetched.data.map((val) => {
//     <img src={val.image} alt="" />
//   })
//  )
    
  return (
    <div>ListAllProperty</div>
  )
}

export default ListAllProperty