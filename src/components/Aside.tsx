import Card from './Card'

const Aside = () => {
  return (
    <aside className='w-full md:w-1/4 p-4 flex flex-col items-center gap-5'>
    <div>
      <h1 className="font-bold italic text-4xl text-customTextColour mb-5">Best This Month</h1>
      <div className='flex flex-col gap-5 items-center border-gray-200 p-4 rounded-md'>
        {/* <MonthCard />
        <MonthCard />
        <MonthCard /> */}
        <Card/>
        <Card/>
        <Card/>
      </div>
      <hr className='mx-7 my-4' />
      <button className='block italic font-semibold mx-auto w-[350px] h-auto text-linkColour text-lg'>
        See More
      </button>
    </div>
  </aside>
  )
}

export default Aside