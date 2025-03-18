import React from 'react'
import eventList from '@/components/EventCard/events.json'
import { notFound } from 'next/navigation'
import { ComingSoon } from '@/components/ComingSoon/comingSoon'


const page = ({params : {eventName}}:{params:{eventName : string}}) => {
    const event = eventList.find(p=>p.Wname === eventName)
    if(!event){
        return notFound();
    }
 
    return (
    <div className='pt-10'><ComingSoon/></div>
  )
}

export default page