import React from 'react'

export function Loader() {
  return (
    <div className="border rounded-md p-4 shadow-sm animate-pulse">
      <div className="h-40 lg:h-60 bg-gray-300 rounded"></div>
      <div className="mt-2 h-4 bg-gray-300 rounded w-3/4"></div> 
      <div className="mt-2 h-4 bg-gray-300 rounded"></div>
    </div>
  )
}