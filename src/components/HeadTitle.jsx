import React from 'react'

const HeadTitle = ({path, title}) => {
  return (
    <div className="relative">
    <h1 className="uppercase text-6xl font-bold text-gray-200 py-6">
     {path}
    </h1>
    <div className="top-0 left-0 absolute">
      <div className="flex gap-1.5 items-center">
        <span className="w-5 sm:w-10 h-[1.8px] bg-green-500"></span>
        <h2 className="text-green-600 font-semibold uppercase">{title}</h2>
        <span className="w-5 sm:w-10 h-[1.8px] bg-green-500"></span>
      </div>
      <h1 className="text-xl sm:text-2xl font-semibold text-main">
        REVIVE PHYSIOTHERAPY <br /> GHANA
      </h1>
    </div>
  </div>
  )
}

export default HeadTitle