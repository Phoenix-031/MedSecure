import React from 'react'

const Logincom = () => {
  return (
    <div className='flex flex-col justify-center items-center py-2 px-1 rounded-lg border-2 border-border-primary'>
        <button onClick={() => {
            console.log("clicked")
        }}>I am an admin</button>
        <button onClick={() => {
            console.log("clicked")
        }}>I am a doctor</button>
        <button onClick={() => {
            console.log("clicked")
        }}>I am a patient</button>
    </div>
  )
}

export default Logincom