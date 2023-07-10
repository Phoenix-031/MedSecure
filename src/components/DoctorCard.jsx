import React from 'react'

const DoctorCard = (props) => {

  // eslint-disable-next-line react/prop-types
  const data = props.data
  
  return (
    <div className='border-2 border-border-primary w-72 rounded-lg py-2 px-4'>
      <div className='flex w-full justify-start items-center py-1'>
        <img className='w-10 h-10 rounded-full' src={data.image} alt="" />
      </div>

      <div >
        <p className='text-white font-serif'>{data.speciality}</p>
        <p className='text-white font-serif'>{data.name}</p>
        <p className='text-white font-serif'>{data.description}</p>
      </div>

      <div>
        <div></div>
        <div></div>
      </div>

    <div className='w-full flex justify-center items-center'>
      <button className='rounded-lg py-3 px-4 bg-bg-secondary border-2 border-border-primary my-1'>Book Appointment</button>
    </div>

    </div>
  )
}

export default DoctorCard