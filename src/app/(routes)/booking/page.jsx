import BookingForm from '@/components/BookingForm'
import HeadTitle from '@/components/HeadTitle'
import React from 'react'

const page = () => {
  return (
    <div className="max-w-7xl mx-auto py-20 px-2 sm:px-4">
      <HeadTitle path="Booking" title="Appointment"/>
      <BookingForm />
    </div>
  )
}

export default page