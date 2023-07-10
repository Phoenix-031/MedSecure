import React from 'react'

import { NavLink } from 'react-router-dom';

const PatientCard = (props) => {
    const patient = props.data;
    
  return (
    <div className='border-2 border-border-primary bg-bg-secondary rounded-md py-2 px-5 flex justify-center items-center flex-col max-w-max gap-1'>
        <p className='font-serif text-white font-semibold'>{patient.patientName}</p>
        <p className='font-serif text-white font-semibold'>{patient.Diagnosis}</p>
        <div className='flex justify-between items-center py-2 gap-3'>
            <p className='font-serif text-white font-semibold'>{patient.patientCondition}</p>
            <p className='font-serif text-white font-semibold'>{patient.patientAge}</p>
        </div>

        <NavLink to='/patient-detalils' className='py-2 px-6 text-md text-white font-serif border-2 border-border-primary rounded-lg my-3 mr-8 hover:bg-bg-secondary cursor-pointer'>View More</NavLink>
    </div>
  )
}

export default PatientCard