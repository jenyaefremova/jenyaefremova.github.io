import React from 'react'

interface ErrorMessageProps {
  error: string
}

export function ErrorMessage({ error }: ErrorMessageProps) {
  return (
    <p className="text-red-600 text-4xl text-center pt-40">{ error }</p>
  )
}