import BookingForm from '@/components/BookingForm'
import HeadTitle from '@/components/HeadTitle'
import React from 'react'

const page = () => {
  return (
    <div className="max-w-7xl mx-auto py-20">
      <HeadTitle path="Booking" title="Appointment"/>
      <BookingForm />
    </div>
  )
}

export default page