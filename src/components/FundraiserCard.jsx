import React from 'react'

const FundraiserCard = (props) => {

    const data = props.data
    
  return (
    <div className='py-2 px-3 rounded-lg border-2 border-border-primary flex justify-center items-center flex-col gap-2 max-h-max w-[250px]'>
        <img src={data.image} alt="" />
        <div>
            <p className='text-white font-serif font-bold '>{data.title}</p>
            <p className='text-white font-serif'>{data.description}</p>
        </div>

        <div className='text-white font-serif'>
            {data.amtraised}
        </div>

        <div className='flex justify-between items-center mx-2 my-2 w-[100%]'>
            <p className='text-white font-serif'>{data.noofdays}</p>
            <p className='text-white font-serif'>{data.supporters}</p>
        </div>

    </div>
  )
}

export default FundraiserCard