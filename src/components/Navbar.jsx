

const Navbar = () => {
  return (
    <div className='w-full bg-black h-14 items-center  flex gap-10 flex-row text-white item-center justify-between pl-4 pr-4 fixed top-0'>
      <div>
        <div className='hover:text-blue-700'>Logo</div>
      </div>
      <div className='flex gap-4  items-center justify-between'>
        <div>Home</div>
        <div>About</div>
        <div>Git</div>
        <div className='button border-2 bg-green-700 px-4 py-2 rounded hover:bg-white hover:text-black font-bold'>Login</div>
      </div>
    </div>
  )
}

export default Navbar