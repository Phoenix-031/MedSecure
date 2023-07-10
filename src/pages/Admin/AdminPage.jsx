import React, { useEffect, useState } from 'react'

import { useContractRead } from 'wagmi'
import GetAllDoctors from '../../components/contractcom/GetAllDoctors'

import useStore from '../../store'

import { NavLink } from 'react-router-dom'

const AdminPage = () => {


  const {walletaddress, doctordata} = useStore((state) => ({
    walletaddress:state.walletaddress,
    doctordata:state.doctordata
  }))

  console.log(walletaddress)

  const [getdoc,setGetdoc] = useState(false)

  // {getdoc && <GetAllDoctors />}

  useEffect(() => {
    console.log(doctordata)
  },[doctordata])
  
  return (
    <>
    <div className='flex justify-center items-center w-full h-[100vh] bg-bg-primary'>
        <NavLink className='py-2 px-6 text-md text-white font-serif border-2 border-border-primary rounded-lg my-3 mr-8 bg-bg-secondary'
        to='/getall'
        >Get all doctors
        </NavLink>

        <NavLink className='py-2 px-6 text-md text-white font-serif border-2 border-border-primary rounded-lg my-3 mr-8 bg-bg-secondary'
        to='/adddoc'
        >Add doctor
        </NavLink>
        
    </div>
    
    {/* <GetAllDoctors /> */}
    </>
    // <GetAllDoctors />
  )
}

export default AdminPage