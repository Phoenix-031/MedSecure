import React from 'react'

import { fundraiserData } from '../assets/data/fundraiserData'
import FundraiserCard from '../components/FundraiserCard'

const Fundraiser = () => {
  return (
    <>
      <div className='bg-bg-primary overflow-x-hidden h-[100vh] pt-8'>
        <div className='w-full flex justify-center items-center py-5'>
          <button className='py-4 px-6 text-xl text-white bg-bg-secondary border-2 border-border-primary rounded-xl'>Add your fundraiser</button>
        </div>

        {/* list of all the fundraisers */}

        <div className='flex w-screen flex-wrap justify-start items-center gap-3 mx-3'>

        {fundraiserData.map((data,index) => {
          return (
            <FundraiserCard data={data} key={data.id} />
          )
        })}
        </div>
      </div>
    </>
  )
}

export default Fundraiser