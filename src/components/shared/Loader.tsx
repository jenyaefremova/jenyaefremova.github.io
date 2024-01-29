import React from 'react'

export function Loader() {
  return (
    <div className="border rounded-md p-4 shadow-sm animate-pulse">
      <div className="h-60 lg:h-80 bg-gray-300 rounded"></div>
      <div className="mt-4 h-8 bg-gray-300 rounded w-full"></div> 
      <div className="mt-6 h-8 bg-gray-300 rounded-r-full w-3/5"></div>
      <div className="pb-12 mt-4 h-8 bg-gray-300 rounded w-1/4"></div>
    </div>
  )
}
