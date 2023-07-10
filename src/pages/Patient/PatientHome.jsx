import React, { useEffect, useState } from 'react'
import { doctorData } from '../../assets/data/doctorData'
import DoctorCard from '../../components/DoctorCard'

const PatientHome = () => {

  useEffect(() => {
    // fetch('http://localhost:5000/doctors')
    // .then(res => res.json())
    // .then(data => {
    //   console.log(data)
    //   setDoctors(data)
    // })

    setDoctors(doctorData)
  },[])
  
  const [doctors,setDoctors] = useState()
  
  return (
    <div className='bg-bg-primary h-full w-full'>
      <div className='flex justify-start items-center  gap-x-2 gap-y-2 px-2 w-full overflow-scroll'>
        <p className='font-serif border-border-primary border-2 bg-bg-secondary cursor-pointer text-white py-2 px-3 rounded-md max-w-max'>Anesthesiologists</p>
        <p className='font-serif border-border-primary border-2 bg-bg-secondary cursor-pointer text-white py-2 px-3 rounded-md max-w-max'>Cardiologists</p>
        <p className='font-serif border-border-primary border-2 bg-bg-secondary cursor-pointer text-white py-2 px-3 rounded-md max-w-max'>Dermatologists</p>
        <p className='font-serif border-border-primary border-2 bg-bg-secondary cursor-pointer text-white py-2 px-3 rounded-md max-w-max'>Endocrinologists</p>
        <p className='font-serif border-border-primary border-2 bg-bg-secondary cursor-pointer text-white py-2 px-3 rounded-md max-w-max'>Family Physicians</p>
        <p className='font-serif border-border-primary border-2 bg-bg-secondary cursor-pointer text-white py-2 px-3 rounded-md max-w-max'>Gastroenterologists</p>
        <p className='font-serif border-border-primary border-2 bg-bg-secondary cursor-pointer text-white py-2 px-3 rounded-md max-w-max'>Hematologists</p>
        <p className='font-serif border-border-primary border-2 bg-bg-secondary cursor-pointer text-white py-2 px-3 rounded-md max-w-max'>Internists</p>
        <p className='font-serif border-border-primary border-2 bg-bg-secondary cursor-pointer text-white py-2 px-3 rounded-md max-w-max'>Nephrologists</p>
        <p className='font-serif border-border-primary border-2 bg-bg-secondary cursor-pointer text-white py-2 px-3 rounded-md max-w-max'>Neurologists</p>
        <p className='font-serif border-border-primary border-2 bg-bg-secondary cursor-pointer text-white py-2 px-3 rounded-md max-w-max'>Oncologists</p>
        <p className='font-serif border-border-primary border-2 bg-bg-secondary cursor-pointer text-white py-2 px-3 rounded-md max-w-max'>Ophthalmologists</p>
        <p className='font-serif border-border-primary border-2 bg-bg-secondary cursor-pointer text-white py-2 px-3 rounded-md max-w-max'>Pathologists</p>
        <p className='font-serif border-border-primary border-2 bg-bg-secondary cursor-pointer text-white py-2 px-3 rounded-md max-w-max'>Pediatricians</p>
        <p className='font-serif border-border-primary border-2 bg-bg-secondary cursor-pointer text-white py-2 px-3 rounded-md max-w-max'>Psychiatrists</p>
      </div>

      <div className='w-full flex justify-start items-center flex-wrap gap-3 py-2 px-2'>
      {
        doctors && doctors.map((doctor,index) => {
          return(
            <DoctorCard data={doctor} key={doctor.id} />
          )
      })
      }
      </div>
    
    </div>
  )
}

export default PatientHome