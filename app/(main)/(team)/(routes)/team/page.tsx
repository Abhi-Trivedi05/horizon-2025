import React from 'react'
import TechnicalCommittee from '@/components/TechnicalCommittee/technical-commitee'
import { Separator } from '@/components/ui/separator'

const page = () => {
  return (
   <div className='lg:pt-20 pt-12 flex flex-col justify-center items-center'>

      <div className='pb-20 lg:pt-0 pt-4'>
        <h1 className='text-3xl lg:text-5xl font-transformer tracking-wider'>Meet the Team</h1>
        <Separator className='bg-white'/>
      </div>
      <TechnicalCommittee />
   </div>
  )
}

export default page
