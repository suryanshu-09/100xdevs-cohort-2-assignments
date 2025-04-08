import ladie from '../assets/ladie.jpg'

export default function Assignment1() {
  return <div className="h-screen flex items-center justify-center bg-[#292929]">
    <div className="rounded-lg bg-white">
      <div className='rounded-t-lg h-56 w-lg bg-linear-65 from-purple-500 to-pink-500'>
      </div>
      <div className='flex justify-center'>
        <img src={ladie} className="border box-border border-slate-200 size-48 rounded-full -m-36" />
      </div>
      <div className='flex justify-center mt-16 text-2xl'>
        <div className='font-bold mr-2'>
          Rita Correia
        </div>
        <div className='opacity-50'>32</div>
      </div>
      <div className='flex justify-center mt-2'>
        <div className='opacity-50 font-bold'>London</div>
      </div>
      <div className="w-full h-0.5 bg-black opacity-20 mt-6">
      </div>
      <div className='flex justify-around mt-4 mb-8'>
        <div className=' flex flex-col items-center'>
          <div className='text-xl font-extrabold'>80K</div>
          <div className='font-light text-sm'>Followers</div>
        </div>
        <div className=' flex flex-col items-center'>
          <div className='text-xl font-extrabold'>803K</div>
          <div className='font-light text-sm'>Likes</div>
        </div>
        <div className=' flex flex-col items-center'>
          <div className='text-xl font-extrabold'>1.4K</div>
          <div className='font-light text-sm'>Photos</div>
        </div>
      </div>
    </div>
  </div>
}
