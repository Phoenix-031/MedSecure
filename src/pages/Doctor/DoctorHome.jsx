import React from 'react'

import { patients } from '../../assets/data/patientData'
import PatientCard from '../../components/PatientCard'

const DoctorHome = () => {
  return (
    <div className='w-full h-[100vh] bg-bg-primary overflow-auto'>
      <p className='font-serif font-semibold text-lg text-white'>Active Patients</p>
      <div className='w-full pt-4 flex flex-wrap justify-start items-start gap-2 mx-3 overflow-x-hidden'>

        {patients.map((patient,index) => <PatientCard key={index} data={patient} />)}
      </div>
    </div>
  )
}

export default DoctorHome