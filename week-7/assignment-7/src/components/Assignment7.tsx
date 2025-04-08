import { useState } from 'react'
import bd1 from '../assets/bd1.jpg'
import bd2 from '../assets/bd2.jpg'
import bd3 from '../assets/bd3.jpg'

const images = [
  {
    value: bd1
  },
  {
    value: bd2
  },
  {
    value: bd3
  },
]
export default function Assignment7() {
  const [currentImg, setCurrentImg] = useState(images[0].value)
  const [name, setName] = useState("")
  const [press, setPress] = useState(false)
  const handleRandomImage = () => {
    const random = images[Math.floor(Math.random() * images.length)].value
    setCurrentImg(random)
    setPress(true)
  }
  return (
    <div className="h-screen flex flex-col gap-6 items-center justify-center bg-[#292929]">
      {/* Image container with relative position */}
      <div className="relative w-128 h-128 border border-white rounded-lg overflow-hidden">
        <img src={currentImg} className="w-full h-full object-cover" />

        <div className="absolute inset-0 flex items-center justify-center">
          {!press ? <div className='flex flex-col items-center'>
            <div className='text-lg font-bold text-white'>What is your name?</div>
            <div>
              <input placeholder='Enter your name' onChange={(e) => setName(e.target.value)} className='bg-white rounded-md pl-2' />
            </div>
          </div>
            : <div className='text-2xl font-bold text-white drop-shadow-lg'>Happy Birthday {name}!</div>
          }
        </div>
      </div>

      <button
        onClick={handleRandomImage}
        className="text-white border-white border px-4 py-2 rounded-md hover:bg-white hover:text-black transition"
      >
        Show Random Image
      </button>
    </div>
  )
}
