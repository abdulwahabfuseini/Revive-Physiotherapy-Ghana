import BookingForm from '@/components/BookingForm'
import HeadTitle from '@/components/HeadTitle'
import React from 'react'


export const metadata = {
  title: 'Revive Physiotherapy | Appointment',
  description: 'Booking An Appiontment With Revive Physiotherapy Ghana',
}

const page = () => {
  return (
    <div className="px-2 py-20 mx-auto max-w-7xl sm:px-4">
      <HeadTitle path="Booking" title="Appointment"/>
      <BookingForm />
    </div>
  )
}

export default page