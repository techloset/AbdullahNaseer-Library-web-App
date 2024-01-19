import React from 'react'

const HeroGrid = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 p-4">
      <div className="bg-gray-200 p-4">1</div>
      <div className="bg-gray-300 p-4">2</div>
      <div className="bg-gray-400 p-4">3</div>
      <div className="bg-gray-500 p-4">4</div>
      <div className="bg-gray-600 p-4">5</div>
      <div className="bg-gray-700 p-4">6</div>
      <div className="bg-gray-800 p-4">7</div>
      <div className="bg-gray-900 p-4">8</div>
      <div className="bg-blue-500 p-4">9</div>
    </section>

  )
}

export default HeroGrid