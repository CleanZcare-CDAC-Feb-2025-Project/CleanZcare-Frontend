import { ClockIcon } from '@heroicons/react/20/solid';
import React from 'react'

const Clock = () => {
  return (
   <span className="inline-block p-2 border rounded-lg bg-gray-200">
            <ClockIcon className="h-5" />
          </span>
  )
}
export default Clock;