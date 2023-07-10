import { useContractRead,useContractWrite,usePrepareContractWrite,useWaitForTransaction } from "wagmi"


// import { useState,useEffect } from "react"

import contractAbi from '../../contracts/abi.json'

const GetProperty = () => {

  const datafetched = useContractRead({
    address: '0x216a2339787a298555d65b9ecb0c09301a8e8911',
    abi: contractAbi.abi,
    functionName: 'getPreoperty',
    args:['1']
  })

 console.log(datafetched)

 if(datafetched.isLoading)return (<div>Loading..</div>)
//  else if(datafetched.isSuccess)return(
//   datafetched.data.map((val) => {
//     <img src={val.image} alt="" />
//   })
//  )
    
  return (
    <div>GetProperty</div>
  )
}

export default GetProperty