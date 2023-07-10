import { useContractRead,useContractWrite,usePrepareContractWrite,useWaitForTransaction, useAccount } from "wagmi"


import { useState,useEffect } from "react"

import contractAbi from '../../contracts/abi.json'
import ListAllProperty from "./ListAllProperty"

import useStore from "../../store"

const UpdateProperty = () => {

    const {address} = useAccount()
    console.log(address)

    const {walletaddress,setWalletaddress} = useStore((state) =>({
      walletaddress:state.walletaddress,
      setWalletaddress:state.setWalletaddress,
    }))

    const [id,setId] = useState('')
    const [owner,setOwner] = useState(walletaddress)
    const [price,setPrice] = useState('746')
    const [proptitle,setProptitle] = useState('this is title')
    const [category,setCategory] = useState('sakjvnsjkdfv')
    const [image,setImage] = useState('some image ink')
    const [propaddr,setPropaddr] = useState('sdfnvjdfs')
    const [propdec,setPropdec] = useState('skjdf')

    console.log(owner,price,proptitle,propaddr,propdec)

    const {config} = usePrepareContractWrite({
    address: '0x216a2339787a298555d65b9ecb0c09301a8e8911',
    abi: contractAbi.abi,
    functionName: 'listPreoperty',
    })

    const {data, isLoading, isSuccess, write} = useContractWrite(config)

    if(isSuccess){
        console.log(data)
    }
    
  return (
    <>
        <div>UpdateProperty</div>
        {/* <form>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            
        </form> */}
        <button onClick={() => write()}>Feed</button>
        {isLoading && <div>Loading</div>}
        {isSuccess && <ListAllProperty />}
    </>
  )
}

export default UpdateProperty