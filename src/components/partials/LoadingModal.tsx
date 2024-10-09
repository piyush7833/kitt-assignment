import Image from 'next/image'
import React from 'react'

const LoadingModal = () => {
  return (
    <div className="absolute inset-12 flex justify-center items-center bg-opacity-60">
        <div className="bg-white rounded-lg shadow-lg flex flex-col items-center space-y-4 p-16">
          <div className="">
            <Image src="/images/flight.png" alt="loading" width={50} height={50} />
          </div>
          <p className="text-lg text-gray-500">Searching 400+ flights</p>
          <p className="text-sm text-gray-500">Attaching company rules</p>
          <p className="text-sm text-gray-500">Serving best results</p>

        </div>
      </div>
  )
}

export default LoadingModal
