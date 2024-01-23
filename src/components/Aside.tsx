import Card from './Card'

const Aside = () => {
  return (
    <aside className='w-full md:w-1/4 p-4 flex flex-col items-center gap-5'>
    <div>
      <h1 className="font-bold italic text-4xl text-[#183B56] mb-5">Best This Month</h1>
      <div className='flex flex-col gap-5 items-center border-gray-200 p-4 rounded-md'>
        {/* <MonthCard />
        <MonthCard />
        <MonthCard /> */}
        <Card/>
        <Card/>
        <Card/>
      </div>
      <hr className='mx-7 my-4' />
      <button className='block mx-auto w-[350px] h-auto text-[#1565D8] text-md font-semibold'>
        See More
      </button>
    </div>
  </aside>
  )
}

export default Aside