import React from 'react'

const HeadTitle = ({path, title}) => {
  return (
    <div className="relative">
    <h1 className="py-6 font-bold text-gray-200 uppercase text-7xl">
     {path}
    </h1>
    <div className="absolute top-0 left-0">
      <div className="flex gap-1.5 items-center">
        <span className="w-5 sm:w-10 h-[1.8px] bg-green-500"></span>
        <p className="font-semibold text-green-600 uppercase">{title}</p>
        <span className="w-5 sm:w-10 h-[1.8px] bg-green-500"></span>
      </div>
      <h1 className="text-xl font-semibold sm:text-2xl text-main">
        REVIVE PHYSIOTHERAPY <br /> GHANA
      </h1>
    </div>
  </div>
  )
}

export default HeadTitle